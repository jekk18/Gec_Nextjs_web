import Link from "next/link"
import Image from "next/image"

 

const BannerItem = ({ bannerTitle, bannerUrl, bannerImg }) => { 
  return (
    <Link href={bannerUrl}>
        <div className="banner-bacgkround-image" >
            <h2>
                {bannerTitle}
            </h2>  
            <Image src={bannerImg} alt="image"/>
        </div>
    </Link>
  )
}

export default BannerItem