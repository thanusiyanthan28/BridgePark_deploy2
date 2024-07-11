import React, { useState, useEffect } from "react";
import axios from "axios";
import "./popupPage.css";
import { List, Avatar, Rate, Button, Select, Progress, Modal } from "antd";
import {
  LikeOutlined,
  DislikeOutlined,
  ArrowDownOutlined,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import {
  getAllReviews,
  updateReviewHelpful,
  getReviewCategories,
} from "../../Services/api";
import ReviewForm from "./writeReview";
import { getUniqueRoomDetails } from "./roomData";

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
  const [filters, setFilters] = useState({
    filter1: "",
    filter2: "",
    filter3: "",
    filter4: "",
    filter5: "",
  });
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

  console.log("revirew rate id", filteredReviewsRate);

  const handleReviewFormCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    const roomDetailsMap =  getUniqueRoomDetails().reduce((map, room) => {
      map[room.id] = room.detail;
      return map;
    }, {});
    setRoomDetails(roomDetailsMap);

    const fetchCategories = async () => {
      try {
        const data = await getReviewCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const filterReviews = (categoryId) => {
    const filtered = rev.filter((review) =>
      review.reviewCategoryRatings?.$values.some(
        (rating) => rating.reviewCategoryId === categoryId
      )
    );
    setFilteredReviewsRate(filtered);
  };

  console.log("setFilteredReviewsRate set view ", filteredReviewsRate);

  useEffect(() => {
    const roomData = getUniqueRoomDetails();
    const roomDetailsMap = roomData.reduce((map, room) => {
      map[room.id] = room.detail;
      return map;
    }, {});
    setRoomDetails(roomDetailsMap);
  }, []);

  console.log("total rev", rev);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");

        const countryNames = response.data.map(
          (country) => country.name.common
        );
        setCountries(countryNames.sort());
        console.log("responses country", countryNames);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const handleCategoryChange = (categoryId) => {
    setCategoryFilter(categoryId);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getAllReviews();
        const sortedReviews = reviewsData.$values.sort(
          (a, b) => b.reviewId - a.reviewId
        );
        setRev(sortedReviews);
        setReviews(sortedReviews);
        setFilteredReviews(sortedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
    setLoad(false);
    setHelpStatusChange(false);
  }, [load, helpStatusChange]);

  console.log("rev", rev.reviewCategoryRatings);

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
      console.log("Updated topics:", updatedTopics);
  
    setSelectedTopics(updatedTopics);
  
    if (updatedTopics.length === 0) {
      setFilteredReviews(reviews);
    } else {
      const filtered = reviews.filter((review) =>
        updatedTopics.some((topic) =>
          review.text && typeof review.text === 'string'
            ? review.text.toLowerCase().includes(topic.toLowerCase())
            : false
        )
      );
      setFilteredReviews(filtered);
    }
  };

  const handleFilterChange = (value, option) => {
    // setFilters({ filter1: value });
    const { key } = option;
    handleCategoryChange(key);
    filterReviews(key);
  };

  const handleHelpfulClick = async (id, value) => {
    const updateData = {
      isHelpful: value,
    };
    try {
      await updateReviewHelpful(id, updateData);
      setHelpStatusChange(true);
    } catch (error) {
      console.error("Failed to update review helpful status:", error);
    }
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

  const topics = ["Room", "Breakfast", "Facilities", "Bed", "Location", "Hello"];

  const CustomIcon = ({ icon, size }) => (
    <span style={{ fontSize: size }}>{icon}</span>
  );

  const getProgressBarColor = (score) => {
    return score > 5 ? "#F6BE00" : "#618e95";
  };

  return (
    <div className="container-pop">
      <div className="guest-reviews-pop">
        <div className="score-pop">6.1</div>
        <div className="details-pop">
          <span className="review-text-pop">{reviewText}</span> · {totalReviews}{" "}
          reviews
        </div>
        <button className="write-pop" onClick={() => setVisible(true)}>
          Write Review
        </button>
        <Modal
          title="Write Your Review"
          visible={visible}
          onCancel={handleReviewFormCancel}
          footer={null}
          className="custom-modal2"
          width={900}
        >
          <ReviewForm
            visible={visible}
            bookingNumber={bookingNumber}
            username={username}
            handlerStatus={handlerStatus}
          />
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

      <div className="filter-options">
        <div>
          <label>Category :</label>
          <Select
            name="Reviewers"
            value={filters.filter1}
            onChange={handleFilterChange}
            style={{ width: 200 }}
          >
            <Option value="">Select Option</Option>
            {cate.$values &&
              cate.$values.map((category) => (
                <Option
                  key={category.reviewCategoryId}
                  value={category.reviewCategoryName}
                >
                  {category.reviewCategoryName}
                </Option>
              ))}
          </Select>
        </div>
        <div className="sort-reviews-pop">
          <span>Sort reviews by:</span>
          <Select
            defaultValue={sortOption}
            onChange={handleSortChange}
            style={{ width: 200 }}
          >
            <Option value="Most relevant">Most relevant</Option>
            <Option value="Most recent">Most recent</Option>
            <Option value="Highest score">Highest score</Option>
            <Option value="Lowest score">Lowest score</Option>
          </Select>
        </div>
      </div>
      <div className="guest-reviews-container">
        <h2 className="title-top-pop">Guest reviews</h2>

        <List
          itemLayout="vertical"
          size="large"zzz
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 5,
          }}
          dataSource={filteredReviews}
          renderItem={(review) => (
            <List.Item key={review.reviewId} className="review-item-pop">
              <div>
                <List.Item.Meta
                  avatar={<Avatar></Avatar>}
                  title={
                    <div className="review-header-pop">
                      <span className="reviewer-name-pop">{review.name}</span>
                      <span className="reviewer-country-pop">
                        {review.country}
                      </span>
                    </div>
                  }
                  description={
                    <>
                      <div className="review-details-pop">
                        <p>{roomDetails[review.roomId]}</p>
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
