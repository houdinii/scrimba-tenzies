import React from 'react'
/**
 * Challenge:
 *
 * - Create a Die component that takes a `value` prop
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components
 *   to look like they do in the slide
 */

export default function Die(props){
  return(
      <div className={`die ${ props.selected ? "selected" : "" }`}>
        <p>{props.value}</p>
      </div>
  )
}