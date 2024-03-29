import SectionTitle from "../SectionTitle"
import SeeAll from "../SeeAll"
import Link from "next/link"
import Image from "next/image"
import ReadMore from "../ReadMore"


const NewsAndPublicationsSection = (props) => {
  return (
    <div className='news-and-publications-section'>
        <div className="container">
          <div className="important-title title-link-service">
              <SectionTitle titleText={props.sectionTitle} titleColor="#EF5324" />
              <Link href="#"><SeeAll seeLink='See-all' /></Link>
          </div>
          <div className="news-and-publications-box">
            {
                props.dataNewsPublication.map((item) => {
                    if(item.identId === '2'){
                        return (
                            <div className="_n_p-item publication-item__" key={item.title}>
                                <Link href={item.link} className="item-img_n_p">
                                    <Image src={item.image}  alt="newsImg" />
                                    <div className="indicator-title">
                                        <h3>{item.publication}</h3>
                                        <div className="n_p-date">
                                            {item.date}
                                        </div>
                                    </div>
                                </Link>  
                                <div className="_n_p-text">
                                    <h1>
                                        {item.title}
                                    </h1>
                                    <div className="text">
                                        <div className="text_inside">
                                            {item.text}
                                        </div>
                                    </div>
                                    <div className="_n_p-links-box">
                                        <ReadMore ReadMoreUrl={item.link} ReadText="Read More"/>
                                        <div className="line-n_p"></div>
                                        <Link href="#" className="request-btn">
                                            Request
                                            <span>
                                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 10H18V4H9.586L7.586 2H2V16H11V18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H8.414L10.414 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V10ZM18 14H21V16H18V19.5L13 15L18 10.5V14Z" fill="#1F2E39"/>
                                                </svg> 
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }else if(item.identId === '3'){
                        return (    
                            <div className="_n_p-item news-item__" key={item.title}>
                                <Link href={item.link} className="item-img_n_p">
                                    <Image src={item.image}  alt="newsImg" />
                                    <div className="indicator-title"> 
                                        <div className="n_p-date"> 
                                            {item.date}
                                        </div>
                                    </div>
                                </Link> 
                                <div className="_n_p-text">
                                    <h1>
                                    {item.title}
                                    </h1>
                                    <div className="text">
                                        <div className="text_inside">
                                            {item.text}
                                        </div>
                                    </div>
                                    <div className="_n_p-links-box">
                                        <ReadMore ReadMoreUrl={item.link} ReadText="Read More"/> 
                                    </div>
                                </div>
                            </div>
                        )   
                    }
                })
            }
             
          </div>
        </div>
    </div>
  )
}

export default NewsAndPublicationsSection; 