import React, { useState } from "react";
import { Button, Input, Space } from "antd";

function NumberPicker({ placeholder, value, onChange, min = 0 }) {
  const increment = () => onChange(value + 1);
  const decrement = () => {
    if (value > min) onChange(value - 1);
  };

  return (
    <Space>
      <Button onClick={decrement}>-</Button>
      <Input 
        value={value} 
        readOnly 
        style={{ width: '60px', textAlign: 'center' }} 
        placeholder={placeholder} 
      />
      <Button onClick={increment}>+</Button>
    </Space>
  );
}

export default NumberPicker;
