import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Rate, Avatar, Select } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import './writeReview.css';
import { getUniqueRoomDetails } from './roomData';

const { TextArea } = Input;
const { Option } = Select;

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const getInitials = (name) => {
  const names = name.split(' ');
  const initials = names.map(name => name[0]).join('');
  return initials.substring(0, 2).toUpperCase();
};

const countries = [
  "United States", "Canada", "United Kingdom", "Australia", "Germany", 
  "France", "Italy", "Spain", "Mexico", "India", "China", "Japan"
];

const ReviewForm = ({ user }) => {
  const [form] = Form.useForm();
  const [ratings, setRatings] = useState({
    staff: 0,
    cleanliness: 0,
    comfort: 0,
    value: 0,
    location: 0,
    wifi: 0,
    facilities: 0,
  });

  const handleSubmit = (values) => {
    console.log('Form values: ', values);
    console.log('Ratings: ', ratings);
  };

  const handleRatingChange = (key, value) => {
    setRatings({ ...ratings, [key]: value });
  };

  const roomDetails = getUniqueRoomDetails();

  return (
    <div className="container-write">
      <div className="user-info-write">
        <Avatar
          src={user.image}
          size={64}
          icon={<UserOutlined />}
        >
          {!user.image && getInitials(user.email.split('@')[0])}
        </Avatar>
        <div className="user-email-write">{user.email}</div>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please enter your email!' }]}
        >
          <Input defaultValue={user.email} disabled />
        </Form.Item>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Please enter your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="country"
          label="Country"
          rules={[{ required: true, message: 'Please select your country!' }]}
        >
          <Select>
            {countries.map((country) => (
              <Option key={country} value={country}>
                {country}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="roomType"
          label="Room Type"
          rules={[{ required: true, message: 'Please select your room type!' }]}
        >
          <Select>
            {roomDetails.map((detail) => (
              <Option key={detail} value={detail}>
                {detail}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please enter a description!' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name="date"
          label="Date"
          rules={[{ required: true, message: 'Please select a date!' }]}
        >
          <DatePicker />
        </Form.Item>
        <div className="rating-container-write">
          <Form.Item label="Staff">
            <Rate
              defaultValue={0}
              character={({ index }) => customIcons[index + 1]}
              onChange={(value) => handleRatingChange('staff', value)}
            />
          </Form.Item>
          <Form.Item label="Cleanliness">
            <Rate
              defaultValue={0}
              character={({ index }) => customIcons[index + 1]}
              onChange={(value) => handleRatingChange('cleanliness', value)}
            />
          </Form.Item>
          <Form.Item label="Comfort">
            <Rate
              defaultValue={0}
              character={({ index }) => customIcons[index + 1]}
              onChange={(value) => handleRatingChange('comfort', value)}
            />
          </Form.Item>
          <Form.Item label="Value for Money">
            <Rate
              defaultValue={0}
              character={({ index }) => customIcons[index + 1]}
              onChange={(value) => handleRatingChange('value', value)}
            />
          </Form.Item>
          <Form.Item label="Location">
            <Rate
              defaultValue={0}
              character={({ index }) => customIcons[index + 1]}
              onChange={(value) => handleRatingChange('location', value)}
            />
          </Form.Item>
          <Form.Item label="Free WiFi">
            <Rate
              defaultValue={0}
              character={({ index }) => customIcons[index + 1]}
              onChange={(value) => handleRatingChange('wifi', value)}
            />
          </Form.Item>
          <Form.Item label="Facilities">
            <Rate 
              defaultValue={0}
              character={({ index }) => customIcons[index + 1]}
              onChange={(value) => handleRatingChange('facilities', value)}
            />
          </Form.Item>
        </div>
        <Form.Item>
          <Button className='button-write' type="" htmlType="submit">
            Submit Review
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ReviewForm;
