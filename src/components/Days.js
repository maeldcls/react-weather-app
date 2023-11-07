import React from 'react'
import '../css/Days.css'
function Days({value, id, onDayClick, isSelected}) {
  const className = isSelected ? "clickedDay" : "";
  return (
     <div  className={className} id={id} onClick={onDayClick}>{value}</div> 

  )
}

export default Days