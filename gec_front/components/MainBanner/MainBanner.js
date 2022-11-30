
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick"; 
 
const MainBanner = () => {

  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,  
    arrows:false,
    draggable: false, 
    initialSlide : currentIndex,
    afterChange:(i) => setCurrentIndex(i)
  }; 

  let fontW = 700; 

   if(currentIndex === 0){
    fontW = 400;
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
        

      <div className="banner-slider-relative">
        <Slider ref={sliderRef} {...settings}
        
        >
      
          <div className="item" >
            <div className="banner-item"> 
              <div className="__img-side">
                  <Image src={require("../../assets/img/banner1.png")}alt="image" />
                  <div className="blur-img-background"></div>
              </div>
              <div className="img-text-side-absolute">
                 <div className="container">
                  <span>
                    GEC is an international business and management
                    consulting company, implementing systemic
                    business solutions to large enterprises
                  </span>
                  <Link href="#">
                    read more
                  </Link>
                </div>
              </div>
            </div>
          </div> 
          {/* <div className="item">
            <iframe width="100%" height="500px"
  src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&amp;modestbranding=1&amp;controls=0&amp;mute=1&amp;rel=0&amp;loop=1&amp;playlist=tgbNymZ7vqY" >
  </iframe> 
          </div> */}
          <div className="item">
            <div className="banner-item"> 
              <div className="__img-side">
                  <Image src={require("../../assets/img/banner1.png")} alt="image"/>
                  <div className="blur-img-background"></div>
              </div>
              <div className="img-text-side-absolute">
                 <div className="container">
                  <span>
                    GEC is an international business and management
                    consulting company, implementing systemic
                    business solutions to large enterprises
                  </span>
                  <Link href="#">
                    read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="control-arrows">
          <button className='main-slider-arrow prev-arr' style={{fontWeight : fontW}} onClick={() => sliderRef?.current?.slickPrev()}>Prev</button>
          <span className="slider-items-current"> {(currentIndex+1).toString().padStart(2,'0')} </span>
          <div className="slider-line"></div>
          <span className="slider-items-count"> 06 </span>
          <button className='main-slider-arrow next-arr' onClick={() => sliderRef.current?.slickNext()}>Next</button> 
        </div> 
      </div> 
    </div>
  );
};

 

export default MainBanner