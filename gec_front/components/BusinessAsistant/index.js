import { useEffect, useRef, useState } from 'react';
import SectionTitle from '../SectionTitle';
import SelectItem from './SelectItem';

const BusinessAsistant = () => {
  const [showItemsBox, setShowItemsBox] = useState(false);
  const [showNextSelectBox, setShowNextSelectBox] = useState(false);
  const [showPrevSelectBox, setShowPrevSelectBox] = useState(false);
  const [count, setCount] = useState(0);
  const [theArray, setTheArray] = useState([]);

  const handleShowItems = () => {
    setShowItemsBox(true);
  } 

  const checkCount = (item, checkCountLength) => {
    if(checkCountLength){
      setCount(count+1)   
      setTheArray([...theArray, item.currentTarget.title]);
      console.log(theArray)
      console.log('push')
    }
    else { 
      setCount(count-1)  
      let clickedItem = item.currentTarget.title;  
      let result = theArray.filter(el => el !== clickedItem)
      console.log('remove') 
      console.log(result)
      setTheArray(result);
    }
    // console.log(theArray)
  }
const handleNextSelectBox = () => {
  setShowNextSelectBox(true);
  setShowPrevSelectBox(false)
}
const handleHideItems = () => {
  setShowNextSelectBox(false);
  setShowPrevSelectBox(true);
}
  // const intentContainer = useRef();
   
  // useEffect(() => {
  //   console.log(intentContainer.current.childNodes.length) 
  // }, [])
  return (
    
    <div className="business-assistant-box">
        <div className="container">
            {/* <SectionTitle titleText='Your business assistant' titleColor="#1E2E38"/>  */}
            <div className={`__selector-boxes ${showNextSelectBox? 'open-selector-box' : ''} ${showPrevSelectBox? 'open-selector-box-2' : ''}`}>
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
                        <SelectItem check={checkCount} itemTitle="Organizational/Management Efficiency" />
                        <SelectItem check={checkCount} itemTitle="Data Analytics" />
                        <SelectItem check={checkCount} itemTitle="costumer experience" />
                        <SelectItem check={checkCount} itemTitle="Data Analytics" />
                        <SelectItem check={checkCount} itemTitle="New Business Development" />
                        <SelectItem check={checkCount} itemTitle="Data Analytics" />
                        <SelectItem check={checkCount} itemTitle="costumer experience" />
                        <SelectItem check={checkCount} itemTitle="Data Analytics" />
                        <SelectItem check={checkCount} itemTitle="New Business Development" />
                        <SelectItem check={checkCount} itemTitle="costumer experience" />
                        <SelectItem check={checkCount} itemTitle="Data Analytics" /> 
                      </div>
                      <div className="select-buttons">
                          <div className="left-show-all">
                            <h3 onClick={handleShowItems}>
                              Show All
                            </h3>
                          </div>
                          <div className="next-question-btn"> 
                            <div className={`next-btn ${count>0 ? 'active-btn' : ''}`} onClick={handleNextSelectBox}>
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
                <div className="__selector-box_01 __selector-box_02">
                    <SectionTitle titleText='Your business assistant' titleColor="#1E2E38" className="business_assistant-title"   /> 
                    <div className="questions-number-box">
                      <div className="title-box_1">
                        <div className="circle" style={{background: 'rgba(4,152,120,0.15)'}}></div>
                        <div className="title">
                          <h2 style={{color: '#049878'}}>Select Your Business Needs</h2>
                            <div className="question-num">
                              <h4>Question</h4>
                              <span className='_n_1' style={{color: '#049878'}}>1</span>
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
                        <SelectItem check={checkCount} itemTitle="Organizational/Management Efficiency" />
                        <SelectItem check={checkCount} itemTitle="Data Analytics" />
                        <SelectItem check={checkCount} itemTitle="costumer experience" />
                        <SelectItem check={checkCount} itemTitle="Data Analytics" />
                        <SelectItem check={checkCount} itemTitle="New Business Development" />
                        <SelectItem check={checkCount} itemTitle="Data Analytics" />
                        <SelectItem check={checkCount} itemTitle="costumer experience" />
                        <SelectItem check={checkCount} itemTitle="Data Analytics" />
                        <SelectItem check={checkCount} itemTitle="New Business Development" />
                        <SelectItem check={checkCount} itemTitle="costumer experience" />
                        <SelectItem check={checkCount} itemTitle="Data Analytics" /> 
                      </div>
                      <div className="select-buttons">
                          <div className="left-show-all">
                            <h3 onClick={handleShowItems}>
                              Show All
                            </h3>
                          </div>
                          <div className="next-question-btn next-question-btn_2">
                            <div className="previous" onClick={handleHideItems}> 
                              <span> 
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.33967 9.99996L11.3522 17.0125L9.34901 19.0156L0.33334 9.99996L9.34901 0.984291L11.3522 2.98746L4.33967 9.99996Z" fill="#1B1B1B"/>
                                </svg> 
                              </span>
                              Previous Question
                            </div>
                            <div className="btn-line-01"></div>
                            <button className='apply-btn__'  >
                                  apply
                              </button>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusinessAsistant;