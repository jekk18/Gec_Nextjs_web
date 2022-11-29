
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
 
const MainBanner = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
  };
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
        <Slider {...settings}>
            <div className="banner-item"> 
                <div className="__img-side">
                    <Image src={require("../../assets/img/banner1.png")} alt="image"/>
                    <div className="blur-img-background"></div>
                </div>
                <div className="img-text-side"></div>
            </div>
            <div className="item">
            {/* <iframe width="100%" height="500px"
    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&amp;modestbranding=1&amp;controls=0&amp;mute=1&amp;rel=0&amp;loop=1&amp;playlist=tgbNymZ7vqY" >
    </iframe> */}
            </div>
            <div className="item">1</div>
            <div className="item">1</div>
            <div className="item">1</div>
        </Slider>
      </div>
    </div>
  );
};

 

export default MainBanner