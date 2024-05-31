import React from 'react';
import CardSlider from './CardSlider';
import Room from '../../components/home/Room';
const cards = [
    {
      image: 'https://images.hdqwalls.com/wallpapers/bthumb/superman-unstoppable-glide-b3.jpg',
      title: 'New Years eve Dinner',
      des: 'please welcome to all and enjoy it please welcome to all and enjoy it',
      month: 'Jan',
      date: '01',
      time:'07:00 pm'
    },
    {
      image: 'https://images.hdqwalls.com/wallpapers/christmas-fairy-house-4k-to.jpg',
      title: 'New Years eve Dinner',
      des: 'please welcome to all and enjoy it please welcome to all and enjoy it',
      month: 'Jan',
      date: '01',
      time:'07:00 pm'
    },
    {
      image: 'https://images.hdqwalls.com/wallpapers/holiday-graphics-pic.jpg',
      title: 'New Years eve Dinner',
      des: 'please welcome to all and enjoy it please welcome to all and enjoy it',
      month: 'Jan',
      date: '01',
      time:'07:00 pm'
    },
    {
      image: 'https://images.hdqwalls.com/wallpapers/spider-man-protector-gu.jpg',
      title: 'New Years eve Dinner',
      des: 'please welcome to all and enjoy it please welcome to all and enjoy it',
      month: 'Jan',
      date: '01',
      time:'07:00 pm'
    },
    {
      image: 'https://images.hdqwalls.com/wallpapers/spider-man-protector-gu.jpg',
      title: 'New Years eve Dinner',
      des: 'please welcome to all and enjoy it please welcome to all and enjoy it',
      month: 'Jan',
      date: '01',
      time:'07:00 pm'
    },
  ];
  

  const MeetingAndEvents = () => {
  return (
    <div className="App">
      <CardSlider cards={cards} />
     
    </div>
  );
}

export default MeetingAndEvents;


