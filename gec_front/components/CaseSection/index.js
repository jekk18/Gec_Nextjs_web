import Link from 'next/link';
import Image from 'next/image'; 
import ReadMore from '../ReadMore';
import SectionTitle from '../SectionTitle'; 
import SeeAll from '../SeeAll';

const CaseSection = () => {
  return (
    <div className='case-section'>
        <div className="container">
        <div className="important-title title-link-service">
              <SectionTitle titleText="Cases" titleColor="#EF5324" />
              <Link href="#"><SeeAll seeLink='See-all'/></Link>
          </div>
          <div className="row">
            <div className="cases-box">
                <div className="case-item">
                    <Link href="#" className="case-img"> 
                        <Image src={require('../../assets/img/caseimg1.png')} alt="caseImg" />
                    </Link>
                    <div className="case-text">
                        <h1>
                            COOPERATION WITH THE GEORGIAN
                            NATIONAL COMPETITION AGENCY
                        </h1>
                        <div className="text__case_01">
                            <div className="text">
                                A management reporting system is a part of a management control system that provides business information. 
                                The system is designed to assist
                            </div>
                        </div>
                        <ReadMore ReadMoreUrl="#" ReadText="Read More"/>
                    </div>
                </div>
                <div className="case-item">
                    <Link href="#" className="case-img"> 
                        <Image src={require('../../assets/img/caseimg2.png')} alt="caseImg" />
                    </Link>
                    <div className="case-text">
                        <h1>
                            Management reporting
                        </h1>
                        <div className="text__case_01">
                            <div className="text">
                                A management reporting system is A part of A management control system that provides business information. 
                                The system is designed to assist members of the management by providing timely.
                            </div>
                        </div>
                        <ReadMore ReadMoreUrl="#" ReadText="Read More"/>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CaseSection;