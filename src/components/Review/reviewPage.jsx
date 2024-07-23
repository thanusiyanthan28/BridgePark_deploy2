import React, { useState, useEffect } from 'react';
import { Button, Modal, Progress } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import ReviewApp from './popupPage';
import { getAllReviews, getReviewCategoryOverall } from "../../Services/api";
import './reviewPage.css';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [clickedTopics, setClickedTopics] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [error, setError] = useState(null);

  const topics = ['Room', 'Location', 'Breakfast', 'Bed', 'Clean'];

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const categoryIds = [1, 2, 3, 4, 6, 7, 8];
        const categoryNames = ['Staff', 'Facilities', 'Cleanliness', 'Comfort', 'Value for money', 'Location', 'Free WiFi'];
        const fetchedData = await Promise.all(categoryIds.map(async (id) => {
          try {
            const data = await getReviewCategoryOverall(id);
            return data !== null ? data : 0;
          } catch {
            return 0; 
          }
        }));
        const formattedData = fetchedData.map((data, index) => ({ name: categoryNames[index], score: data }));
        setCategoryData(formattedData);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCategoryData();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getAllReviews();
        const sortedReviews = reviewsData.$values.sort((a, b) => b.reviewId - a.reviewId);
        setReviews(sortedReviews);
        setFilteredReviews(sortedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleCategoryClick = (topic) => {
    setClickedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
    setSelectedTopic(topic);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setClickedTopics([]);
  };

  const getProgressBarColor = (score) => {
    return score > 50 ? '#F6BE00' : '#618e95';
  };

  const totalReviews = filteredReviews.length;
  const overallScore = categoryData.reduce((acc, curr) => acc + curr.score, 0) / categoryData.length;

  return (
    <div className="container-rev">
      <h2 className="rev-home-head">Guest Reviews</h2>
      <div className="guest-reviews-rev">
        <div className="score-rev">{overallScore.toFixed(1)}</div>
        <div className="details-rev">
          <span className="review-text-rev">Pleasant</span> · {totalReviews} reviews
        </div>
        <Button type="link" className="read-reviews-link-rev" onClick={() => setIsModalVisible(true)}>
          Read all reviews
        </Button>
      </div>
      <div className="review-categories-rev">
        <h3 className="category-home">Categories:</h3>
        <div className="categories-rev">
          {categoryData
            .sort((a, b) => b.score - a.score)
            .map((category) => (
              <div key={category.name} className="category-rev">
                <span className="category-name-rev">
                  {category.name}
                  {category.score <= 5 && <ArrowDownOutlined className="down-arrow-rev" />}
                </span>
                <span className="category-score-rev">{category.score}</span>
                <Progress
                  percent={(category.score / 10) * 100}
                  strokeColor={getProgressBarColor(category.score)}
                  trailColor="#f0f0f0"
                  showInfo={false}
                />
              </div>
            ))}
        </div>
      </div>
      <h3 className="button-head-rev">Select topics to read reviews:</h3>
      <div className="topic-buttons-container-rev">
        <div className="topic-buttons-rev">
          {topics.map((topic) => (
            <Button
              key={topic}
              type="default"
              shape="round"
              icon={clickedTopics.includes(topic) ? <span>&times;</span> : <span>+</span>}
              onClick={() => handleCategoryClick(topic)}
            >
              {topic}
            </Button>
          ))}
        </div>
        <Button type="link" className="review-show" onClick={() => setIsModalVisible(true)}>
          <button className="review-show-btn">Read All Reviews</button>
        </Button>
      </div>
      <Modal
        title="All Reviews"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
        style={{ top: 20, right: 20, position: 'fixed', margin: 0 }}
        bodyStyle={{ maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', padding: '20px' }}
      >
        <ReviewApp topic={selectedTopic} />
      </Modal>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default ReviewPage;
