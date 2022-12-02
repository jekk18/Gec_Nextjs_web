import React, { useRef } from "react";
import Link from "next/link"
import SectionTitle from "../SectionTitle"
import SeeAll from "../SeeAll"
import Image from "next/image";

import Slider from "react-slick"
 
 
const ServicesSection = () => {


  const servicSliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,  
    arrows:false,
    draggable: true
  }; 
  const onLinkMouseDown = (e) => {
    e.preventDefault();
    console.log('draggable')
}
 
  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      /> 


      <div className="services-slider">
        <div className="container">
          <div className="important-title title-link-service">
              <SectionTitle titleText="Services" titleColor="#EF5324" />
              <Link href="#"><SeeAll seeLink='See-all' /></Link>
          </div>

          <div className="services-slider-box">
            <Slider ref={servicSliderRef} {...settings}>
                <a href="#" className="__services-item" onMouseDown={onLinkMouseDown}>
                    <div className="services-icon">  
                      <Image src={require('../../assets/img/frame1.png') } alt="frame" /> 
                    </div>
                    <h1 className="title">
                        BUSINESS PROCESSES AND
                        OPERATIONS OPTIMIZATION
                    </h1>
                    <div className="text">
                        Business process re-engineering is the practice 
                        of rethinking and redesigning business processes to better support
                    </div>
                    <div className="read-more-box">
                      <span className="read-more-link">Read More</span>
                      <span className="read-more-arrow"> 
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5588 3.34012L2.1374 11.7615L0.753901 10.378L9.17526 1.95662L1.75288 1.95662L1.75288 -0.000244611L12.5156 -0.000244141L12.5156 10.7625L10.5588 10.7625L10.5588 3.34012Z" fill="#EF5324"/>
                        </svg> 
                      </span>
                    </div>
                </a>
                <a href="#" className="__services-item" onMouseDown={onLinkMouseDown}>
                    <div className="services-icon">  
                      <Image src={require('../../assets/img/frame2.png') } alt="frame" /> 
                    </div>
                    <h1 className="title">
                        ENTERPRISE RESOURCE PLANNING (ERP)
                        SYSTEM IMPLEMENTATION
                    </h1>
                    <div className="text">
                      Enterprise Resource Planning (ERP) system is business process management 
                      software that integrates varied organizational systems.
                    </div>
                    <div className="read-more-box">
                      <span className="read-more-link">Read More</span>
                      <span className="read-more-arrow"> 
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5588 3.34012L2.1374 11.7615L0.753901 10.378L9.17526 1.95662L1.75288 1.95662L1.75288 -0.000244611L12.5156 -0.000244141L12.5156 10.7625L10.5588 10.7625L10.5588 3.34012Z" fill="#EF5324"/>
                        </svg> 
                      </span>
                    </div>
                </a>
                <a href="#" className="__services-item" onMouseDown={onLinkMouseDown}>
                    <div className="services-icon">  
                      <Image src={require('../../assets/img/frame3.png') } alt="frame" /> 
                    </div>
                    <h1 className="title">
                      PERFORMANCE IMPROVEMENT/RESTRUCTURING
                    </h1>
                    <div className="text">
                    A strong commitment to continuous improvement is critical to your organization’s 
                    ability to achieve operational excellence
                    </div>
                    <div className="read-more-box">
                      <span className="read-more-link">Read More</span>
                      <span className="read-more-arrow"> 
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5588 3.34012L2.1374 11.7615L0.753901 10.378L9.17526 1.95662L1.75288 1.95662L1.75288 -0.000244611L12.5156 -0.000244141L12.5156 10.7625L10.5588 10.7625L10.5588 3.34012Z" fill="#EF5324"/>
                        </svg> 
                      </span>
                    </div>
                </a>
                <a href="#" className="__services-item" onMouseDown={onLinkMouseDown}>
                    <div className="services-icon">  
                      <Image src={require('../../assets/img/frame4.png') } alt="frame" /> 
                    </div>
                    <h1 className="title">
                      PERFORMANCE IMPROVEMENT/RESTRUCTURING
                    </h1>
                    <div className="text">
                    A strong commitment to continuous improvement is critical to your organization’s 
                    ability to achieve operational excellence
                    </div>
                    <div className="read-more-box">
                      <span className="read-more-link">Read More</span>
                      <span className="read-more-arrow"> 
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5588 3.34012L2.1374 11.7615L0.753901 10.378L9.17526 1.95662L1.75288 1.95662L1.75288 -0.000244611L12.5156 -0.000244141L12.5156 10.7625L10.5588 10.7625L10.5588 3.34012Z" fill="#EF5324"/>
                        </svg> 
                      </span>
                    </div>
                </a>
                <a href="#" className="__services-item" onMouseDown={onLinkMouseDown}>
                    <div className="services-icon">  
                      <Image src={require('../../assets/img/frame2.png') } alt="frame" /> 
                    </div>
                    <h1 className="title">
                        ENTERPRISE RESOURCE PLANNING (ERP)
                        SYSTEM IMPLEMENTATION
                    </h1>
                    <div className="text">
                      Enterprise Resource Planning (ERP) system is business process management 
                      software that integrates varied organizational systems.
                    </div>
                    <div className="read-more-box">
                      <span className="read-more-link">Read More</span>
                      <span className="read-more-arrow"> 
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5588 3.34012L2.1374 11.7615L0.753901 10.378L9.17526 1.95662L1.75288 1.95662L1.75288 -0.000244611L12.5156 -0.000244141L12.5156 10.7625L10.5588 10.7625L10.5588 3.34012Z" fill="#EF5324"/>
                        </svg> 
                      </span>
                    </div>
                </a>
                <a href="#" className="__services-item" onMouseDown={onLinkMouseDown}>
                    <div className="services-icon">  
                      <Image src={require('../../assets/img/frame3.png') } alt="frame" /> 
                    </div>
                    <h1 className="title">
                      PERFORMANCE IMPROVEMENT/RESTRUCTURING
                    </h1>
                    <div className="text">
                    A strong commitment to continuous improvement is critical to your organization’s 
                    ability to achieve operational excellence
                    </div>
                    <div className="read-more-box">
                      <span className="read-more-link">Read More</span>
                      <span className="read-more-arrow"> 
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5588 3.34012L2.1374 11.7615L0.753901 10.378L9.17526 1.95662L1.75288 1.95662L1.75288 -0.000244611L12.5156 -0.000244141L12.5156 10.7625L10.5588 10.7625L10.5588 3.34012Z" fill="#EF5324"/>
                        </svg> 
                      </span>
                    </div>
                </a>
            </Slider>
          </div>
          <div className="controls-services-slider">
            <button onClick={() => servicSliderRef?.current?.slickPrev()}>
              <span className="arr__1">
                <svg width="20" height="39" viewBox="0 0 20 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.027 28.5342V28.1122C18.9379 28.1262 18.8535 28.145 18.7644 28.1544C18.8535 28.2763 18.9379 28.4076 19.027 28.5295V28.5342Z" fill="#EF5324"/>
                  <path d="M3.27273 16.2559L2.81323 16.7154C7.02839 17.8454 11.0138 20.0585 14.324 23.3687L16.6075 25.6521C17.3905 26.4351 18.1078 27.2744 18.7643 28.1559C18.8534 28.1418 18.9378 28.1278 19.0268 28.1137V16.7342C13.8224 17.7891 8.42094 17.625 3.27273 16.2559Z" fill="#EFB81C"/>
                  <path d="M19.0268 16.7335V0.59494C18.9752 0.613695 18.9237 0.63245 18.8721 0.651205L3.27271 16.2553C8.42092 17.6291 13.8223 17.7885 19.0268 16.7335Z" fill="#EF5324"/>
                  <path d="M16.6121 25.6515L14.3287 23.368C11.0185 20.0578 7.03308 17.8447 2.81792 16.7148L0 19.528L8.75385 28.2818C10.3668 27.7848 12.05 27.5973 13.7192 27.7239C13.8458 29.3931 13.6583 31.0763 13.1612 32.6892L19.0268 38.5548V28.5303C18.9378 28.4037 18.858 28.2771 18.7643 28.1552C18.1078 27.2738 17.3905 26.4345 16.6075 25.6515H16.6121Z" fill="#163749"/>
                  <path d="M13.7238 27.7283L10.9622 30.49L13.1659 32.6937C13.6629 31.0807 13.8504 29.3975 13.7238 27.7283Z" fill="#EF5324"/>
                  <path d="M13.7239 27.728C12.0547 27.6014 10.3715 27.789 8.75854 28.286L10.9622 30.4897L13.7239 27.728Z" fill="#EFB81C"/>
                </svg>
              </span> 
                Prev
              </button>
            
            <button onClick={() => servicSliderRef?.current?.slickNext()}>
              Next
               <span className="arr__1">
                <svg width="20" height="39" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.0268555 13.0172V14.4674C2.75497 19.0717 4.32187 24.4367 4.32187 30.1769V34.0561C4.32187 35.0551 4.26102 36.049 4.15453 37.0378L13.1756 28.0167C7.65849 24.173 3.13022 19.0261 0.0268555 13.0172Z" fill="#EFB81C"/>
                  <path d="M13.1756 28.0114L20.6044 20.5826L0.0268555 0V13.0169C3.13022 19.0258 7.65849 24.1728 13.1756 28.0114Z" fill="#EF5324"/>
                  <path d="M4.32187 30.1714C4.32187 24.4362 2.75497 19.0662 0.0268555 14.4619V33.2646C0.0522097 33.295 0.0826348 33.3255 0.11306 33.3559C0.0877057 33.3863 0.0572806 33.4167 0.0268555 33.4472V41.1498L4.15453 37.0221C4.26609 36.0384 4.32187 35.0394 4.32187 34.0404V30.1612V30.1714Z" fill="#163749"/>
                  <path d="M0.0268555 33.3609V33.4522C0.0522097 33.4218 0.0826348 33.3913 0.11306 33.3609H0.0268555Z" fill="#EF5324"/>
                  <path d="M0.0268555 33.2693V33.3606H0.11306C0.0877057 33.3302 0.0572806 33.2998 0.0268555 33.2693Z" fill="#EFB81C"/>
                </svg> 
                </span>    
            </button> 
          </div>
        </div>
      </div>
    </div>
     
  )
}

export default ServicesSection