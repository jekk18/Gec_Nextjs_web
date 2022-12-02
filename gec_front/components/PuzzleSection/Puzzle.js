import React, { useState, useEffect } from "react" 

import img from '../../assets/img/puzzle1.png';
import img1 from '../../assets/img/puzzle2.png';
import img2 from '../../assets/img/puzzle3.png';
import img3 from '../../assets/img/puzzle4.png';
import img4 from '../../assets/img/puzzle6.png';
import img5 from '../../assets/img/puzzle7.png';
import Image from "next/image";



const items = [img4, img1, img3, img, img5, img2]
const hiddenItemsOrder = [img4, img1, img3, img, img2, img5]

// img4 img1


const initialDnDState = {
  draggedFrom: null,
  // draggedTo : null,
  isDragging: false,
  // originalOrder: [],
  // updatedOrder: [],
  draggingX:0,
  draggingY:0
}

const Puzzle = () => {
  const [list, setList] = useState(items)
  const [DnD, setDnD] = useState(initialDnDState)
  const [isHiddenItemsOrderSet, setIsHiddenItemsOrderSet] = useState(false)
  const onDragStart = e => {
    console.log('start')
    const draggedFrom = Number(e.currentTarget.dataset.position);
    setDnD(Dnd=> { return {
      ...DnD,
      draggedFrom,//0,1,2,3
      isDragging: true,
      // originalOrder: list
    }})
    // e.dataTransfer.effectAllowed = 'copyMove';
  // e.dataTransfer.setData('text/html', e.target.innerHTML);
  }
  const onDragOver= e=>{}
  const onDragEnter = e => {
    console.log('drag enter',DnD.draggedFrom)
    e.preventDefault()
    // let newList = DnD.originalOrder
    let newList = [...list]
    const draggedFrom = DnD.draggedFrom
    const draggedTo = Number(e.currentTarget.dataset.position)
    // const itemDragged = newList[draggedFrom]
    // const remainingItems = newList.filter((item, i) => i !== draggedFrom)
    // newList = [
    //   ...remainingItems.slice(0, draggedTo),
    //   itemDragged,
    //   ...remainingItems.slice(draggedTo)
    // ]
    // const temp = newList[draggedFrom];
    // newList[draggedFrom] = newList[draggedTo];
    // newList[draggedTo] = temp;
    // if(draggedTo !== DnD.draggedTo) {
    //   setDnD({
    //     ...DnD,
    //     updatedOrder: newList,
    //     draggedTo: draggedTo
    //   })
    // }
    // if(draggedTo !== DnD.draggedTo) {
      
    setList(list=>{
    let newList = [...list]
    const temp = newList[draggedFrom];
    newList[draggedFrom] = newList[draggedTo];
    newList[draggedTo] = temp;
  return newList;})
     
  setDnD(DnD=> { 
    console.log('draged to',draggedTo)
    return {
    ...DnD,
    draggedFrom: draggedTo,
  }})
  }
  const onDrop = e => {
    console.log('drop')
    // setList(DnD.updatedOrder)
    setDnD(DnD=> { return {
      ...DnD,
      draggedFrom: null,
      // draggedTo: null,
      isDragging: false
    }})
  }
  const onDragLeave = e => {
    console.log('drag leave')
    // setDnD({
    //   ...DnD,
    //   // draggedTo: null
    // })
  }
  useEffect(() => {
    if(JSON.stringify(hiddenItemsOrder) === JSON.stringify(list)) {
      setIsHiddenItemsOrderSet(true)
    } else {
      setIsHiddenItemsOrderSet(false)
    }
  }, [list])
  return ( 
    <div className="width-puzzle" onMouseMove={(e)=>{
      if(DnD.isDragging)
      {
        setDnD({...DnD,draggingX:e.clientX, draggingY:e.clientY})
      }
    }}> 
    
         <style jsx>{`
       ul{
        display: flex;
        justify-content: end;
        margin: 0;
        padding: 0;
        list-style: none;  
        flex-wrap: wrap;
       }
       ul li{  
        box-sizing: border-box; 
        text-align: center;
        cursor: move;  
        width: 258px;
        height: 258px;
       }
       .puzzleimg{
        width: 100%;
       }
    
      `}</style>

        {isHiddenItemsOrderSet ? 
            <div className='succeed'>succeed</div>
        :
        <div className="puzzle-text-top">Move the tiles to assamble the puzzle</div>
        }          
      <ul className="puzzle-ul">
        {list.map((item, i) => (
          <li 
            className="puzzle-li"
            key={i}
            draggable
            data-position={i}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
          > {  
            <Image src={item} style={{width: '100%', height: '100%', objectFit: 'fill'}} alt="img" />} </li>
        ))}
      </ul>
       
    </div>
  )
}

 export default Puzzle;