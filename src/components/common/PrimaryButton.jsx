import React from 'react';
import { Button } from 'antd';
import "../../css/Card.css";

const PrimaryButton = ({ title, onClick }) => (
  <Button type="default" className='btnPrimary' onClick={onClick}>
    {title}
  </Button>
);

export default PrimaryButton;
