import React, { useState } from 'react';
import { Button, Modal, Progress } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import ReButton from './ViewButton';
import ReviewApp from './popupPage';
import './reviewPage.css';

const ReviewPage = () => {
  const categories = [
    { name: 'Staff', score: 7.9, color: '#003b95' },
    { name: 'Facilities', score: 6.1, color: '#d4111e' },
    { name: 'Cleanliness', score: 6.3, color: '#d4111e' },
    { name: 'Comfort', score: 6.4, color: '#d4111e' },
    { name: 'Value for money', score: 7.0, color: '#003b95' },
    { name: 'Location', score: 7.1, color: '#d4111e' },
    { name: 'Free WiFi', score: 6.6, color: '#d4111e' },
  ];
  
  const score = 6.1;
  const totalReviews = 2651;
  const reviewText = 'Pleasant';
  const topics = ['Room', 'Location', 'Breakfast', 'Bed', 'Clean'];

  const [clickedTopics, setClickedTopics] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

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

  return (
    <div className="container-rev">
      <h2>Guest Reviews</h2>
      <div className="guest-reviews-rev">
        <div className="score-rev">{score}</div>
        <div className="details-rev">
          <span className="review-text-rev">{reviewText}</span> · {totalReviews} reviews
        </div>
        <Button type="link" className="read-reviews-link-rev" onClick={() => setIsModalVisible(true)}>
          Read all reviews
        </Button>
      </div>
      <div className="review-categories-rev">
        <h3>Categories:</h3>
        <div className="categories-rev">
          {categories.map((category) => (
            <div key={category.name} className="category-rev">
              <span className="category-name-rev">
                {category.name}
                {category.color === '#d4111e' && <ArrowDownOutlined className="down-arrow-rev" />}
              </span>
              <span className="category-score-rev">{category.score}</span>
              <Progress
                percent={(category.score / 10) * 100}
                strokeColor={category.color}
                trailColor="#f0f0f0"
                showInfo={false}
              />
            </div>
          ))}
        </div>
      </div>
      <h3 className="button-head-rev">Select topics to read reviews:</h3>
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
      <Button type="link" className="review-show"onClick={() => setIsModalVisible(true)}>
      <button className='review-show-btn'>See All Reviews</button>
      </Button>
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
    </div>
  );
};

export default ReviewPage;
