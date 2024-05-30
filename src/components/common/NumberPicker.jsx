import React, { useState } from "react";
import { Button, Input, Space } from "antd";

function NumberPicker({ placeholder, min = 0 }) {
  const [value, setValue] = useState(min);

  const increment = () => setValue(value + 1);
  const decrement = () => {
    if (value > min) setValue(value - 1);
  };

  return (
    <Space>
      <Button onClick={decrement}  >-</Button>
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
