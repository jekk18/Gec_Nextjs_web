 
const SectionTitle = (props) => {
  return (
    <h1 className="h1__section-title">
        <div className="title-line__0" style={{width: '4px', height: '30px', background:`${props.titleColor}`}}></div>
        <span className="title__0" style={{color: `${props.titleColor}`}}>
            {props.titleText}
        </span>
    </h1>
  )
}

export default SectionTitle