import React from 'react'
export default function Die(props){
  /**
   * Challenge: Create a function `holdDice` that takes
   * `id` as a parameter. For now, just have the function
   * console.log(id).
   *
   * Then, figure out how to pass that function down to each
   * instance of the Die component so when each one is clicked,
   * it logs its own unique ID property. (Hint: there's more
   * than one way to make that work, so just choose whichever
   * you want)
   *
   */

  return(
      <div className={`die ${props.isHeld ? "selected" : ""}`} onClick={ props.holdDice }>
        <p className={"die--num"}>{props.value}</p>
      </div>
  )
}