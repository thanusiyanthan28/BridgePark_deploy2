import React, { useState, useEffect } from "react";
import axios from "axios";
import "./popupPage.css";
import { List, Avatar, Rate, Button, Select, Progress } from "antd";
import {
  LikeOutlined,
  DislikeOutlined,
  ArrowDownOutlined,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import PopupCard from "./Sidebar";
import { getAllReviews } from "../../Services/api";

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
  const [reviews, setReviews] = useState('');
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
  const [rev, setRev] = useState("");

  console.log(rev)

  const reviewData = [
    {
      id:1,
      name: 'maria',
      country: "Argentina",
      room: "Single Room with Shared Bathroom",
      nights: "19 nights · July 2023",
      travelerType: "Solo traveller",
      reviewDate: "30 July 2023",
      score: 7,
      title: "Exceptional",
      text: `Excellent hotel and value for money. All the staff were friendly and attentive to what I needed at all times. The cleaning very good.
             The bus stop is in front of the hotel and the underground is 8 blocks away, very good access for both types of transport.`,
      helpful: 12,
      notHelpful: 1,
      reviewerChoice: true,
    },
  ];

 

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryNames = response.data.map(
          (country) => country.name.common
        );
        setCountries(countryNames.sort());
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getAllReviews();
        console.log('reviewdata',reviewsData);
        setRev(reviewsData.$values);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const getFilteredReviews = () => {
    if (selectedTopics.length === 0) {
      return reviews;
    }
    return reviews.filter((review) =>
      selectedTopics.some((topic) =>
        review.text.toLowerCase().includes(topic.toLowerCase())
      )
    );
  };

  const handleSortChange = (value) => {
    setSortOption(value);
  };

  const handleCategoryClick = (topic) => {
    setSelectedTopics((prevSelectedTopics) =>
      prevSelectedTopics.includes(topic)
        ? prevSelectedTopics.filter((t) => t !== topic)
        : [...prevSelectedTopics, topic]
    );
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleHelpfulClick = (id) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id
          ? { ...review, userReaction: "helpful", helpful: review.helpful + 1 }
          : review
      )
    );
  };

  const handleNotHelpfulClick = (id) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id
          ? {
              ...review,
              userReaction: "notHelpful",
              notHelpful: review.notHelpful + 1,
            }
          : review
      )
    );
  };

  const filteredReviews = getFilteredReviews();
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

  const topics = ["Room", "Breakfast", "Facilities", "Bed", "Location"];

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
        <PopupCard
          visible={visible}
          showModal={() => setVisible(true)}
          handleCancel={() => setVisible(false)}
          bookingNumber={bookingNumber}
          setBookingNumber={setBookingNumber}
          username={username}
          setUsername={setUsername}
          handleSubmit={() => {
            console.log("Booking Number:", bookingNumber);
            console.log("Username/Email:", username);
            setBookingNumber("");
            setUsername("");
            setVisible(false);
          }}
        />
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
          <select
            name="Reviewers"
            value={filters.filter1}
            onChange={handleFilterChange}
          >
            <option value="">Select Option</option>
            <option value="Option 1">Staff</option>
            <option value="Option 2">Facilities</option>
            <option value="Option 3">Rooms</option>
            <option value="Option 4">Cleanlines</option>
            <option value="Option 5">Location</option>
            <option value="Option 6">Comport</option>
            <option value="Option 7">Value of Money</option>
          </select>
        </div>
        <div>
          <label>Review Rating:</label>
          <select
            name="Review scores"
            value={filters.filter2}
            onChange={handleFilterChange}
          >
            <option value="">Select Option</option>
            <option value="Option A">Excellent</option>
            <option value="Option B">Very Good</option>
            <option value="Option C">Good</option>
            <option value="Option C">Fair</option>
            <option value="Option C">Poor</option>
          </select>
        </div>
        <div>
          <label>Country :</label>
          <select
            name="Languages"
            value={filters.filter3}
            onChange={handleFilterChange}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        {/* <div>
          <label>Time of year</label>
          <select
            name="Time of year"
            value={filters.filter4}
            onChange={handleFilterChange}
          >
            <option value="">Select Option</option>
            <option value="Option 123">Option 123</option>
            <option value="Option 456">Option 456</option>
            <option value="Option 789">Option 789</option>
          </select>
        </div> */}
      </div>
      <div>
        <h3 className="button-head-pop">Select topics to read reviews:</h3>
        <div className="topic-buttons-pop">
          {topics.map((topic) => (
            <Button
              key={topic}
              type="default"
              shape="round"
              icon={
                selectedTopics.includes(topic) ? (
                  <span>&times;</span>
                ) : (
                  <span>+</span>
                )
              }
              onClick={() => handleCategoryClick(topic)}
              style={{ fontSize: "16px" }}
            >
              {topic}
            </Button>
          ))}
        </div>
      </div>
      <div className="guest-reviews-container">
        <h2 className="title-top-pop">Guest reviews</h2>
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
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 5,
          }}
          dataSource={reviewData}
          renderItem={(review) => (
            <List.Item key={review.id} className="review-item-pop">
              <div>
                <List.Item.Meta
                  avatar={<Avatar>{review.com}</Avatar>}
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
                        <p>{review.room}</p>
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
                <p className="review-text-pop">{review.text}</p>
                <div className="review-actions-pop">
                  <div className="button-row-pop">
                    {!review.userReaction && (
                      <>
                        <Button
                          className="btn-rev-like"
                          type="link"
                          icon={<LikeOutlined />}
                          onClick={() => handleHelpfulClick(review.id)}
                        >
                          Helpful ({review.helpful})
                        </Button>
                        <Button
                          className="btn-rev-dislike"
                          type="link"
                          icon={<DislikeOutlined />}
                          onClick={() => handleNotHelpfulClick(review.id)}
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
                    defaultValue={review.score / 2}
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
