import React from 'react';
import '../../css/home/about.css';
import CarouselComponent from '../common/CarouselComponent';
import { Row, Col } from 'antd';
import img1 from '../../assets/images/Bar2.jpg';
import img2 from '../../assets/images/BreakfastBuffet.jpg';
import img3 from '../../assets/images/DormRoom.jpg';
import img4 from '../../assets/images/DoubleEnsuite.jpg';
import img5 from '../../assets/images/ExecutiveKingRoom 2.jpg';
import img6 from '../../assets/images/ExecutiveKingRoom.jpg';
import img7 from '../../assets/images/HotelBreakfast.jpg';
import img8 from '../../assets/images/HotelFront.jpg';
import img9 from '../../assets/images/Reception1.jpg';
import img10 from '../../assets/images/Loungebar 1.jpg';
import img11 from '../../assets/images/Loungebar 1.jpg';
import img12 from '../../assets/images/TwilightExecroom.jpg';

const About = () => {
    const carouselImages = [
        [img1, img2, img3],
        [img4, img5, img6],
        [img7, img8, img9],
        [img10, img11, img12]
    ];

    return (
        <div className='abContainer'>
            <div className='aboutContainer'>
                <div className='textWrapper'>
                    <p>WELCOME TO</p>
                    <h1 className='aboutH1'>BRIDGE PARK HOTEL</h1>
                    <div className="paragraphContainer">
                        <p>Originally a Grade ii listed building, Bridge Park Hotel is the ideal place to stay whether you are visiting Wembley or simply looking for accommodation to explore the sites of London. Just a short distance from Wembley Stadium we offer a warm welcome and exceptional accommodation. You can expect spacious rooms with freshly-prepared food and perfectly-poured pints whenever you visit us. All of our bedrooms feature comfortable mattresses, complimentary toiletries, flat-screen TVs and other essentials ensuring a great night's sleep. With a Lounge Bar & Grill at the heart of our property, a freshly cooked meal or late-night drinks are always nearby. You'll always get the best rate if you book direct!</p>
                    </div>
                </div>
            </div>
            <div className='aboutCouroselComponent'>
                <Row gutter={[16, 16]}>
                    {carouselImages.map((images, index) => (
                        <Col key={index} xs={24} sm={12} md={6}>
                            <CarouselComponent images={images} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default About;
