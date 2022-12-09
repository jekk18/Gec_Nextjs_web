import BannerItem from "./BannerItem";
// import bg from './group1.png';

const Banners = () => { 
  return (
    <div className='banners-box-section'>
         <div className="container">
            <div className="banners">
                <BannerItem bannerUrl="#" bannerTitle="Work with us"  bannerImg={require('../../assets/img/b1.png')}/>
                <BannerItem bannerUrl="#" bannerTitle="Want to book a meeting?"  bannerImg={require('../../assets/img/b2.png')}/>
                <BannerItem bannerUrl="#" bannerTitle="Faq"  bannerImg={require('../../assets/img/b3.png')}/>
            </div>
         </div>
    </div>
  )
}

export default Banners;