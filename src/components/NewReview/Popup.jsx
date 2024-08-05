import React, { useState, useEffect } from "react";
import "./Popup.css";
import { List, Avatar, Rate, Button, Select, Progress, Modal } from "antd";
import {
  LikeOutlined,
  DislikeOutlined,
  ArrowDownOutlined,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { reviewData } from "./reviewData";

const { Option } = Select;

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const ReviewApp = () => {
  const [sortOption, setSortOption] = useState("Most relevant");
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
 
  const [countries, setCountries] = useState([]);
  const [visible, setVisible] = useState(false);
  const [bookingNumber, setBookingNumber] = useState("");
  const [username, setUsername] = useState("");
  const [rev, setRev] = useState([]);
  const [roomDetails, setRoomDetails] = useState({});
  const [load, setLoad] = useState(false);
  const [helpStatusChange, setHelpStatusChange] = useState(false);
  const [user, setUser] = useState("");
  const [cate, setCategories] = useState([]);
  const [filteredReviewsRate, setFilteredReviewsRate] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(1);
  const [LogedIn, isLogedIn] = useState(false);

  const handleReviewFormCancel = () => {
    setVisible(false);
  };

//   useEffect(() => {
    
//     setCategories([
//       { id: 1, name: "Staff" },
//       { id: 2, name: "Facilities" },
//       { id: 3, name: "Cleanliness" },
//       { id: 4, name: "Comfort" },
//       { id: 5, name: "Value for money" },
//       { id: 6, name: "Location" },
//       { id: 7, name: "Free WiFi" },
//     ]);
//   }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken) {
      isLogedIn(true);
    }
  }, []);

  const filterReviews = (categoryId) => {
    const filtered = rev.filter((review) =>
      review.reviewCategoryRatings?.some(
        (rating) => rating.reviewCategoryId === categoryId
      )
    );
    setFilteredReviewsRate(filtered);
  };



  useEffect(() => {
    // Set static country data
    const countryNames = ["USA", "Canada", "UK", "Germany", "France", "Australia"];
    setCountries(countryNames.sort());
  }, []);

  const handleCategoryChange = (categoryId) => {
    setCategoryFilter(categoryId);
    filterReviews(categoryId);
  };

  const filterreviewscat = (categoryId) => {
    const filtered = rev.filter((review) => {
      if (review.reviewCategoryRatings) {
        return review.reviewCategoryRatings.some((rating) => {
          return rating.reviewCategoryId === categoryId;
        });
      }
      return false;
    });
  };

  useEffect(() => {
    setRev(reviewData);
    setReviews(reviewData);
    setFilteredReviews(reviewData);
    setLoad(false);
    setHelpStatusChange(false);
  }, [load, helpStatusChange]);

  const handlerStatus = (value) => {
    setVisible(value);
    setLoad(true);
  };

  const handleSortChange = (value) => {
    setSortOption(value);
  };

  const handleCategoryClick = (topic) => {
    const updatedTopics = selectedTopics.includes(topic)
      ? selectedTopics.filter((t) => t !== topic)
      : [...selectedTopics, topic];
    setSelectedTopics(updatedTopics);

    if (updatedTopics.length === 0) {
      setFilteredReviews(reviews);
    } else {
      const filtered = reviews.filter((review) =>
        updatedTopics.some((topic) =>
          review.comment.toLowerCase().includes(topic.toLowerCase())
        )
      );
      setFilteredReviews(filtered);
    }
  };

  const handleFilterChange = (value, option) => {
    const { key } = option;
    handleCategoryChange(key);
    filterReviews(key);
  };

  const handleHelpfulClick = (id, value) => {
    // Simulate updating helpful status locally
    const updatedReviews = reviews.map((review) => {
      if (review.reviewId === id) {
        if (value) {
          review.helpful += 1;
        } else {
          review.notHelpful += 1;
        }
        review.userReaction = value ? "helpful" : "notHelpful";
      }
      return review;
    });
    setReviews(updatedReviews);
    setHelpStatusChange(true);
  };

  const totalReviews = filteredReviews.length;
  const reviewText = "Pleasant";

  const categories = [
    { name: "Staff", score: 7.9 },
    { name: "Facilities", score: 4.9 },
    { name: "Cleanliness", score: 6.3 },
    { name: "Comfort", score: 4 },
    { name: "Value for money", score: 7.0 },
    { name: "Location", score: 7.1 },
    { name: "Free WiFi", score: 6.6 },
  ];

  const topics = [
    "Room",
    "Breakfast",
    "Facilities",
    "Bed",
    "Location",
    "Hello",
  ];

  const CustomIcon = ({ icon, size }) => (
    <span style={{ fontSize: size }}>{icon}</span>
  );

  const getProgressBarColor = (score) => {
    return score > 5 ? "#136f63" : "#081c15";
  };
  const [selectedReview, setSelectedReview] = useState(null);

const handleReviewClick = (review) => {
  setSelectedReview(review);
  setVisible(true);
};



  return (
    <div className="container-pop">
      <div className="guest-reviews-pop">
        <div className="score-pop">6.1</div>
        <div className="details-pop">
          <span className="review-text-pop">{reviewText}</span>
          <br></br> {totalReviews} reviews
        </div>
        <button className="review-text-pop1">
          <a className="review-text-pop1">We aim for 100% real reviews</a>
        </button>

        
          <button className="write-pop" >
            Write Review
          </button>
        
        <Modal
          title="Write Your Review"
          visible={visible}
          onCancel={handleReviewFormCancel}
          footer={null}
          className="custom-modal2"
          width={600}
        >
        </Modal>
      </div>
      <div className="review-card"></div>
      <h3>Categories:</h3>
      <div className="categories-pop">
        {categories
          .sort((a, b) => b.score - a.score)
          .map((category) => (
            <div key={category.name} className="category-pop">
              <span className="category-name-pop">
                {category.name}
                {category.score <= 5 && (
                  <ArrowDownOutlined className="down-arrow-pop" />
                )}
              </span>
              <span className="category-score-pop">{category.score}</span>
              <Progress
                percent={(category.score / 10) * 100}
                strokeColor={getProgressBarColor(category.score)}
                trailColor="#f0f0f0"
                showInfo={false}
                style={{ width: "80%" }}
              />
            </div>
          ))}
      </div>
      <div className="guest-reviews-container">
        <h2 className="title-top-pop">Guest reviews</h2>

        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 5,
            total: filteredReviews.length,
            showSizeChanger: false,
            onChange: (page, pageSize) => {
              console.log("Page:", page, "Page Size:", pageSize);
            },
          }}
          dataSource={filteredReviews}
          renderItem={(review) => (
            <List.Item key={review.reviewId} className="review-item-pop">
              <div>
                <List.Item.Meta
                  avatar={<Avatar />}
                  title={
                    <div className="review-header-pop">
                      <span className="reviewer-name-pop">{review.name}</span>
                      <div>
                      <span className="reviewer-country-pop">
                        {review.country}
                      </span>
                      </div>
                      
                    </div>
                  }
                  description={
                    <>
                      <div className="review-details-pop">
                        {/* <p className="rev-room-type-pop">
                          {roomDetails[review.roomId]}
                        </p> */}
                        <p>{review.nights}</p>
                        <p>{review.travelerType}</p>
                      </div>
                      <div className="review-meta-pop">
                        <span className="review-date-pop">
                          Reviewed: {review.reviewDate}
                        </span>
                        {review.reviewerChoice && (
                          <span className="reviewers-choice-pop">
                            Reviewers' choice
                          </span>
                        )}
                      </div>
                    </>
                  }
                />
              </div>
              <div className="review-content-pop">
                <h3 className="review-title-pop">{review.title}</h3>
                <p className="review-text-pop">{review.comment}</p>
                <div className="review-actions-pop">
                  <div className="button-row-pop">
                    {!review.userReaction && (
                      <>
                        <Button
                          className="btn-rev-like"
                          type="link"
                          icon={<LikeOutlined />}
                          onClick={() =>
                            handleHelpfulClick(review.reviewId, true)
                          }
                        >
                          Helpful ({review.helpful})
                        </Button>
                        <Button
                          className="btn-rev-dislike"
                          type="link"
                          icon={<DislikeOutlined />}
                          onClick={() =>
                            handleHelpfulClick(review.reviewId, false)
                          }
                        >
                          Not helpful ({review.notHelpful})
                        </Button>
                      </>
                    )}
                    {review.userReaction && (
                      <span className="clicked-text-useful">
                        {review.userReaction === "helpful"
                          ? "You marked this review as helpful."
                          : "You marked this review as not helpful."}
                      </span>
                    )}
                  </div>
                  <Rate
                    className="rate-pop"
                    disabled
                    value={review.overallStar}
                    count={5}
                    character={({ index }) => (
                      <CustomIcon icon={customIcons[index + 1]} size="25px" />
                    )}
                  />
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ReviewApp;
