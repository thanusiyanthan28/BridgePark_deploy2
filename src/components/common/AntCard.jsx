import React from 'react';
import { Card as AntCard, Form, Input, Button } from 'antd'; // Import Ant Design components
import '../../css/Card.css'

function Card({ children, title, description, imageUrl }) {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <AntCard className="card" cover={<img alt={title} src={imageUrl} />}>
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
        {children} {/* Add content inside the card */}

        {/* Ant Design form */}
        <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </AntCard>
  );
}

export default Card;
