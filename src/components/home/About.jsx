import React,{useEffect,useState} from 'react';
import '../../css/home/about.css';
import CarouselComponent from '../common/CarouselComponent';
import { Row, Col } from 'antd';
import bgimage from '../../assets/bph-welcome.webp'
import img1 from '../../assets/images/image_gellery/image6.webp';
import img2 from '../../assets/images/image_gellery/image1.webp';
import img3 from '../../assets/images/image_gellery/image2.webp';
import img4 from '../../assets/images/image_gellery/image3.webp';
import img5 from '../../assets/images/image_gellery/image4.webp';
import img6 from '../../assets/images/image_gellery/image5.webp';

const About = () => {
    const carouselImages = [
        [img1, img5, img3],
        [img2, img6, img4],
        [img3, img1, img5],
        [img4, img2, img6]
    ];
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 767px)").matches);
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };
    
        window.addEventListener("resize", handleResize);
    
        // Cleanup function
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        < div className='abContainer-main'>
            <img className='about-bgimage' src={bgimage}/>
     {! isMobile && <a href='https://direct-book.com/properties/bridgeparkdirect?'target='_blank'> <button className="about-discount">Save up to 10% and get exclusive discounts when you Book!</button></a>}
        <div className='abContainer'>
           
            <div className='aboutContainer'>
                <div className='aboutTextWrapper'>
                    <p className='about-welcome'>WELCOME TO</p>
                    {/* <h1 className='aboutH1'>BRIDGE PARK HOTEL</h1> */}
                    <div className='location-title'>BRIDGE PARK HOTEL</div>
                    <div className="about-sub-content">
                                <p>Originally a Grade II-listed building, Bridge Park Hotel is the ideal place to stay, whether you are visiting 
        Wembley or simply looking for accommodation to explore the sites of London. Just a short distance from 
        Wembley Stadium, we offer a warm welcome and exceptional accommodation. You can expect spacious 
        rooms with freshly prepared food and perfectly poured pints whenever you visit us. All of our bedrooms 
        feature comfortable mattresses, complimentary toiletries, flat-screen TVs, and other essentials, ensuring a 
        great night's sleep. With a Lounge Bar & Grill at the heart of our property, a freshly cooked meal or late night drinks are always nearby. You'll always get the best rate if you book direct!</p>
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
        </div>
    );
};

export default About;
