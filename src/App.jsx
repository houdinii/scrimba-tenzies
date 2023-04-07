import React from 'react'
import './App.css'
import Die from "../components/Die.jsx";

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


function App() {
  return (
    <div className="App">
      <main className={"container"}>
        <header>
          <h1 className={"header--title"}>Tenzies</h1>
          <p className={"header--instructions"}>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </header>
        <section className={"dice"}>
          <div className={"dice--row"}>
            <Die selected={true} value={1}/>
            <Die selected={false} value={2}/>
            <Die selected={true} value={1}/>
            <Die selected={false} value={4}/>
            <Die selected={false} value={5}/>
          </div>
          <div className={"dice--row"}>
            <Die selected={false} value={3}/>
            <Die selected={false} value={3}/>
            <Die selected={false} value={5}/>
            <Die selected={false} value={6}/>
            <Die selected={true} value={1}/>
          </div>
        </section>
        <section className={"buttons"}>
          <button className={"buttons--roll-btn"}>Roll</button>
        </section>
      </main>
    </div>
  )
}

export default App
