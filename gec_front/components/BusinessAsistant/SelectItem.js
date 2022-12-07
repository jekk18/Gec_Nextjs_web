import { useState } from "react"


const SelectItem = (props) => {
  const [checkActive, setCheckActive] = useState(false);

  const handleCheck = (e) => {
    // console.log(e.currentTarget.title)
    setCheckActive(!checkActive);
    props.check(e,!checkActive);
  }
  return (
    <div className={`select-item ${checkActive  ? 'check-active' : '' }`} onClick={handleCheck} title={props.itemTitle}>{props.itemTitle}</div>
  )
}

export default SelectItem