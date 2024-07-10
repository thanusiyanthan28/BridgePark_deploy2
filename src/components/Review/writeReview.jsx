import React, { useState, useEffect } from "react";
import { Form, Input, Button, DatePicker, Rate, Avatar, Select } from "antd";
import {
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./writeReview.css";
import { getUniqueRoomDetails } from "./roomData";
import id from "../common/UrlLib";
import { submitReview } from '../../Services/api';


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
  if (!name) return "";
  const names = name.split(" ");
  const initials = names.map((name) => name[0]).join("");
  return initials.substring(0, 2).toUpperCase();
};

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Mexico",
  "India",
  "China",
  "Japan",
];

const ReviewForm = (props) => {
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
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUSerId] = useState("");
  const [image, setImage] = useState("");
  const{handlerStatus}=props

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);
    }
    
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setEmail(parsedUser.email);
        setUSerId(parsedUser.userId);
        setImage(parsedUser.picture);
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
      }
    }
  }, []);

  const RoomID = (roomType) => {
    console.log("roomDetails", roomDetails);
    const selectedRoom = roomDetails.find((room) => room.detail === roomType);
    console.log("Selected Room:", selectedRoom);
    return selectedRoom ? selectedRoom.id : null;
  };

  const handleSubmit = async (values) => {
    const roomId = RoomID(values.roomType);
  
    const reviewData = {
      reviewId: 0,
      userId: userId,
      roomId: roomId,
      country: values.country,
      overallStar: 0,
      comment: values.description,
      reviewCategoryRatings: [
        { id: "0", reviewId: "0", reviewCategoryId: "1", rating: ratings.staff },
        { id: "0", reviewId: "0", reviewCategoryId: "2", rating: ratings.facilities },
        { id: "0", reviewId: "0", reviewCategoryId: "3", rating: ratings.cleanliness },
        { id: "0", reviewId: "0", reviewCategoryId: "4", rating: ratings.comfort },
        { id: "0", reviewId: "0", reviewCategoryId: "5", rating: ratings.value },
        { id: "0", reviewId: "0", reviewCategoryId: "6", rating: ratings.location },
        { id: "0", reviewId: "0", reviewCategoryId: "7", rating: ratings.wifi },
      ],
    };
  
    try {
      const response = await submitReview(reviewData);
      handlerStatus(false)
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
  };
  

  const handleRatingChange = (key, value) => {
    setRatings({ ...ratings, [key]: value });
  };

  const roomDetails = getUniqueRoomDetails();

  return (
    <div className="container-write">
      <div className="user-info-write">
        <Avatar src={image} size={64} icon={<UserOutlined />}>
          {!user.image && getInitials(email.split("@")[0])}
        </Avatar>
        <div className="user-email-write">{email}</div>
      </div>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="" label="Email">
          <Input defaultValue={email} disabled />
        </Form.Item>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please enter your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="country"
          label="Country"
          rules={[{ required: true, message: "Please select your country!" }]}
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
          rules={[{ required: true, message: "Please select your room type!" }]}
        >
          <Select>
            {roomDetails.map((detail) => (
              <Option key={detail.id} value={detail.detail}>
                {detail.detail}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter a description!" }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <div className="rating-container-write">
          <Form.Item label="Staff" name="staff">
            <Rate
              defaultValue={0}
              character={({ index }) => customIcons[index + 1]}
              onChange={(value) => handleRatingChange("staff", value)}
            />
          </Form.Item>
          <Form.Item label="Cleanliness" name="cleanliness">
            <Rate
              defaultValue={0}
              character={({ index }) => customIcons[index + 1]}
              onChange={(value) => handleRatingChange("cleanliness", value)}
            />
          </Form.Item>
          <Form.Item label="Comfort" name="comfort">
            <Rate
              defaultValue={0}
              character={({ index }) => customIcons[index + 1]}
              onChange={(value) => handleRatingChange("comfort", value)}
            />
          </Form.Item>
          <Form.Item label="Value for Money" name="valueforMoney">
            <Rate
              defaultValue={0}
              character={({ index }) => customIcons[index + 1]}
              onChange={(value) => handleRatingChange("value", value)}
            />
          </Form.Item>
          <Form.Item label="Location" name="location">
            <Rate
              defaultValue={0}
              character={({ index }) => customIcons[index + 1]}
              onChange={(value) => handleRatingChange("location", value)}
            />
          </Form.Item>
          <Form.Item label="Free WiFi" name="freeWiFi">
            <Rate
              defaultValue={0}
              character={({ index }) => customIcons[index + 1]}
              onChange={(value) => handleRatingChange("wifi", value)}
            />
          </Form.Item>
          <Form.Item label="Facilities" name="facilities">
            <Rate
              defaultValue={0}
              character={({ index }) => customIcons[index + 1]}
              onChange={(value) => handleRatingChange("facilities", value)}
            />
          </Form.Item>
        </div>
        <Form.Item>
          <Button className="button-write" type="" htmlType="submit">
            Submit Review
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ReviewForm;