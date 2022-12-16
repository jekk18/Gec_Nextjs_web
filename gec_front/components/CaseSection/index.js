import Link from 'next/link';
import Image from 'next/image'; 
import ReadMore from '../ReadMore';
import SectionTitle from '../SectionTitle'; 
import SeeAll from '../SeeAll';

const CaseSection = (props) => {  

  return (
    <div className='case-section'>  
        <div className="container">
            <div className="important-title title-link-service">
                <SectionTitle titleText={props.sectionTitle} titleColor="#EF5324" />
                <Link href="#"><SeeAll seeLink='See-all'/></Link> 
            </div>
          <div className="row">
            <div className="cases-box">
                {
                    props.dataCase.map((caseItem, index) =>  {
                        if(index === 2){
                            return
                        }
                         return(
                            <div className="case-item" key={index}> 
                                <Link href={caseItem.link} className="case-img"> 
                                    <Image src={caseItem.image} alt="caseImg" /> 
                                </Link>
                                <div className="case-text">
                                    <h1>
                                    {caseItem.title}
                                    </h1>
                                    <div className="text__case_01">
                                        <div className="text">
                                            {caseItem.text}
                                        </div>
                                    </div>
                                    <ReadMore ReadMoreUrl={caseItem.link} ReadText="Read More"/>
                                </div>
                            </div>
                         )
                    })
                }
            </div>
          </div>
        </div>
    </div>
  )
}

export default CaseSection;