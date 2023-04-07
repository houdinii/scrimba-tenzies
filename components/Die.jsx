import React from 'react'
export default function Die(props){
  return(
      <div className={`die ${ props.selected ? "selected" : "" }`}>
        <p className={"die--num"}>{props.value}</p>
      </div>
  )
}