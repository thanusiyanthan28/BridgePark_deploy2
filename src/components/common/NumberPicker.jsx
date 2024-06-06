import React from "react";
import { Button, Input, Space } from "antd";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

function NumberPicker({ placeholder, value, onChange, min = 0 }) {
  const increment = () => onChange(value + 1);
  const decrement = () => {
    if (value > min) onChange(value - 1);
  };

  return (
    <Space>
      <Button 
        shape="circle" 
        onClick={decrement} 
        style={{ border: "none", backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        <MinusOutlined style={{ color: '#669399', fontWeight: 'bold',fontSize:'15px' }} />
      </Button>
      <Input 
        value={value} 
        readOnly 
        style={{ width: '60px', textAlign: 'center', border: "none", fontSize: '25px', fontWeight: 'bold' }} 
        placeholder={placeholder} 
      />
      <Button 
        shape="circle" 
        onClick={increment} 
        style={{ border: "none", backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        <PlusOutlined style={{ color: '#669399', fontWeight: 'bold',fontSize:'15px' }} />
      </Button>
    </Space>
  );
}

export default NumberPicker;
