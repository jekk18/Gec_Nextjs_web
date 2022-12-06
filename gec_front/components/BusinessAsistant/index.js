import { useEffect, useRef, useState } from 'react';
import SectionTitle from '../SectionTitle';
import SelectItem from './SelectItem';

const BusinessAsistant = () => {
  const [showItemsBox, setShowItemsBox] = useState(false);
  const handleShowItems = () => {
    setShowItemsBox(!showItemsBox);
  }
  // const intentContainer = useRef();
   
  // useEffect(() => {
  //   console.log(intentContainer.current.childNodes.length) 
  // }, [])
  return (
    
    <div className="business-assistant-box">
        <div className="container">
            {/* <SectionTitle titleText='Your business assistant' titleColor="#1E2E38"/>  */}
            <div className="__selector-boxes">
                <div className="__selector-box_01">
                    <SectionTitle titleText='Your business assistant' titleColor="#1E2E38" className="business_assistant-title"   /> 
                    <div className="questions-number-box">
                      <div className="title-box_1">
                        <div className="circle"></div>
                        <div className="title">
                          <h2>Select Your Business Needs</h2>
                            <div className="question-num">
                              <h4>Question</h4>
                              <span className='_n_1'>1</span>
                              <h4>Of</h4>
                              <span className='_n_2'>2</span>
                            </div>
                        </div>
                      </div>
                      <div className="text-box_1">
                        Answering the question below will help us to provide personalized content related to your business needs and challenges.
                      </div>
                    </div>
                    <h2 className="choose-options-title">
                      Choose one or several options
                    </h2>
                    <div className="item-form-box">
                      <div className={`choose-items-box ${showItemsBox ? 'open-choose-item-box' : ''}`} >
                        <SelectItem itemTitle="Organizational/Management Efficiency" />
                        <SelectItem itemTitle="Data Analytics" />
                        <SelectItem itemTitle="costumer experience" />
                        <SelectItem itemTitle="Data Analytics" />
                        <SelectItem itemTitle="New Business Development" />
                        <SelectItem itemTitle="Data Analytics" />
                        <SelectItem itemTitle="costumer experience" />
                        <SelectItem itemTitle="Data Analytics" />
                        <SelectItem itemTitle="New Business Development" />
                        <SelectItem itemTitle="costumer experience" />
                        <SelectItem itemTitle="Data Analytics" /> 
                      </div>
                      <div className="select-buttons">
                          <div className="left-show-all">
                            <h3 onClick={handleShowItems}>
                              Show All
                            </h3>
                          </div>
                          <div className="next-question-btn">
                            <div className="previous"></div>
                            <div className="btn-line-01"></div>
                            <div className="next-btn disable-btn">
                               Next Quiestion
                               <span> 
                                  <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.66045 10L0.647949 2.98754L2.65112 0.984375L11.6668 10L2.65112 19.0157L0.647949 17.0125L7.66045 10Z" fill="white"/>
                                  </svg> 
                               </span>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
                <div className="__selector-box_02"></div>
            </div>
        </div>
    </div>
  )
}

export default BusinessAsistant;