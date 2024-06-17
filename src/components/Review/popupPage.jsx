import React, { useState } from 'react';
import './popupPage.css';
import { List, Avatar, Rate, Button, Select } from 'antd';
import { LikeOutlined, DislikeOutlined, StarOutlined } from '@ant-design/icons';
import { Progress, Tag } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import PopupCard from './Sidebar';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
const { Option } = Select;

const reviewData = [
  {
    id: 1,
    name: 'María',
    country: 'Argentina',
    room: 'Single Room with Shared Bathroom',
    nights: '19 nights · July 2023',
    travelerType: 'Solo traveller',
    reviewDate: '30 July 2023',
    score: 10,
    title: 'Exceptional',
    text: `Excellent hotel and value for money. All the staff were friendly and attentive to what I needed at all times. The cleaning very good.
           The bus stop is in front of the hotel and the underground is 8 blocks away, very good access for both types of transport.`,
    helpful: 12,
    notHelpful: 1,
    reviewerChoice: true
  },
  {
    id: 2,
    name: 'Graham',
    country: 'United Kingdom',
    room: 'Double Room Ensuite',
    nights: '2 nights · April 2024',
    travelerType: 'Solo traveller',
    reviewDate: '15 May 2024',
    score: 6,
    title: 'As expected from previous visits.',
    text: `Managed to change room on arrival. Location good for work, breakfast was good this time.
           Room 201, single room with a double bed. The en-suite un-usable, lack of space, the loo is just about under the sink, no sink just a hand basin.
           VAT invoices only for 1 night, when 2 nights stayed. As a business, I can't claim it all back because of their book keeping!!`,
    helpful: 8,
    notHelpful: 5,
    reviewerChoice: false
  },
  {
    id: 3,
    name: 'Dussanthan',
    country: 'Sri Lanka',
    room: 'Double Room Ensuite',
    nights: '2 nights · April 2024',
    travelerType: 'Solo traveller',
    reviewDate: '15 May 2024',
    score: 10,
    title: 'As a new visitor',
    text: `Managed to change room on arrival. Location good for work, breakfast was good this time.
           Room 201, single room with a double bed. The en-suite un-usable, lack of space, the loo is just about under the sink, no sink just a hand basin.
           VAT invoices only for 1 night, when 2 nights stayed. As a business, I can't claim it all back because of their book keeping!!`,
    helpful: 8,
    notHelpful: 5,
    reviewerChoice: true
  },
  // Add more reviews as needed
];
const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
const ReviewApp = () => {
  const [sortOption, setSortOption] = useState('Most relevant');
  const [reviews, setReviews] = useState(reviewData);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [filters, setFilters] = useState({
    filter1: '',
    filter2: '',
    filter3: '',
    filter4: '',
    filter5: '',
  });

  const score = 6.1;
  const totalReviews = 2651;
  const reviewText = 'Pleasant';
  const topics = ['Room', 'Location', 'Breakfast', 'Bed', 'Clean'];

  const [visible, setVisible] = useState(false);
  const [bookingNumber, setBookingNumber] = useState('');
  const [username, setUsername] = useState('');

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSubmit = () => {
    console.log('Booking Number:', bookingNumber);
    console.log('Username/Email:', username);
    setBookingNumber('');
    setUsername('');
    setVisible(false);
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

  const categories = [
    { name: 'Staff', score: 7.9, color: '#003b95' },
    { name: 'Facilities', score: 6.1, color: '#d4111e' },
    { name: 'Cleanliness', score: 6.3, color: '#d4111e' },
    { name: 'Comfort', score: 6.4, color: '#d4111e' },
    { name: 'Value for money', score: 7.0, color: '#003b95' },
    { name: 'Location', score: 7.1, color: '#d4111e' },
    { name: 'Free WiFi', score: 6.6, color: '#d4111e' },
  ];

  const CustomIcon = ({ icon, size }) => (
    <span style={{ fontSize: size }}>
      {icon}
    </span>
  );

  return (
    <div className="container-pop">
      <div className="guest-reviews-pop">
        <div className="score-pop">{score}</div>
        <div className="details-pop">
          <span className="review-text-pop">{reviewText}</span> · {totalReviews} reviews
        </div>
        <button className='write-pop' onClick={showModal}>Write Review</button>
        <PopupCard
          visible={visible}
          showModal={showModal}
          handleCancel={handleCancel}
          bookingNumber={bookingNumber}
          setBookingNumber={setBookingNumber}
          username={username}
          setUsername={setUsername}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="review-card"></div>
      <h3>Categories:</h3>
      <div className="categories-pop">
        {categories.map((category) => (
          <div key={category.name} className="category-pop">
            <span className="category-name-pop">
              {category.name}
              {category.color === '#d4111e' && <ArrowDownOutlined className="down-arrow-pop" />}
            </span>
            <span className="category-score-pop">{category.score}</span>
            <Progress
              percent={(category.score / 10) * 100}
              strokeColor={category.color}
              trailColor="#f0f0f0"
              showInfo={false}
              style={{ width: '80%' }}
            />
          </div>
        ))}
      </div>

      <div className="filter-options">
        <div>
          <label>Reviewers:</label>
          <select
            name="Reviewers"
            value={filters.filter1}
            onChange={handleFilterChange}
          >
            <option value="">Select Option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
        <div>
          <label>Review scores:</label>
          <select
            name="Review scores"
            value={filters.filter2}
            onChange={handleFilterChange}
          >
            <option value="">Select Option</option>
            <option value="Option A">Option A</option>
            <option value="Option B">Option B</option>
            <option value="Option C">Option C</option>
          </select>
        </div>
        <div>
          <label>Languages</label>
          <select
            name="Languages"
            value={filters.filter3}
            onChange={handleFilterChange}
          >
            <option value="">Select Option</option>
            <option value="Option X">Option X</option>
            <option value="Option Y">Option Y</option>
            <option value="Option Z">Option Z</option>
          </select>
        </div>
        <div>
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
        </div>
      </div>
      <div>
        <h3 className="button-head-pop">Select topics to read reviews:</h3>
        <div className="topic-buttons-pop">
          {topics.map((topic) => (
            <Button
              key={topic}
              type="default"
              shape="round"
              icon={selectedTopics.includes(topic) ? <span>&times;</span> : <span>+</span>}
              onClick={() => handleCategoryClick(topic)}
              style={{ fontSize: '16px' }}
            >
              {topic}
            </Button>
          ))}
        </div>
      </div>
      <div className="guest-reviews-container">
        <h2>Guest reviews</h2>
        <div className="sort-reviews-pop">
          <span>Sort reviews by:</span>
          <Select defaultValue={sortOption} onChange={handleSortChange} style={{ width: 200 }}>
            <Option value="Most relevant">Most relevant</Option>
            <Option value="Most recent">Most recent</Option>
            <Option value="Highest score">Highest score</Option>
            <Option value="Lowest score">Lowest score</Option>
          </Select>
        </div>
        <List className='pop-content'
          itemLayout="vertical"
          dataSource={getFilteredReviews()}
          renderItem={review => (
            <List.Item key={review.id} className="review-item-pop">
              <List.Item.Meta
                avatar={<Avatar>{review.name[0]}</Avatar>}
                title={
                  <div className="review-header-pop">
                    <span className="reviewer-name-pop">{review.name}</span>
                    <span className="reviewer-country-pop">{review.country}</span>
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
                      <span className="review-date-pop">Reviewed: {review.reviewDate}</span>
                      {review.reviewerChoice && <span className="reviewers-choice-pop">Reviewers' choice</span>}
                    </div>
                  </>
                }
              />
              <div className="review-content-pop">
                <h3>{review.title}</h3>
                <p>{review.text}</p>
                <div className="review-actions-pop">
                  <div className="button-row-pop">
                    <Button className='btn-rev-like' type="link" icon={<LikeOutlined />}>Helpful ({review.helpful})</Button>
                    <Button className='btn-rev-dislike' type="link" icon={<DislikeOutlined />}>Not helpful ({review.notHelpful})</Button>
                  </div>
                  <Rate className='rate-pop'
                    disabled
                    defaultValue={review.score / 2}
                    count={5}
                    character={({ index }) => <CustomIcon icon={customIcons[index + 1]} size="30px" />}
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