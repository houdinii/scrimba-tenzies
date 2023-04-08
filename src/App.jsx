import React from 'react'
import './App.css'
import Die from "../components/Die.jsx";
import {nanoid} from "nanoid";

function App() {
  function allNewDice(){
    let arr = [];
    for(let i=0; i<10; i++){
      arr.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid()
      })
    }
    return arr
  }
  const [dice, setDice] = React.useState(allNewDice())
  const rollDice = () => setDice(allNewDice())

  function holdDice(id){

    setDice(dice.map(die => {
      return die.id === id
        ? {
          id: die.id,
          value: die.value,
          isHeld: !die.isHeld
        } : die
    }))
  }

  let diceEls = dice.map(die =>
      <Die
          value={die.value}
          isHeld={die.isHeld}
          key={die.id}
          holdDice={() => holdDice(die.id)}
      />
  )

    return (
    <div className="App">
      <main className={"container"}>
        <header>
          <h1 className={"header--title"}>Tenzies</h1>
          <p className={"header--instructions"}>
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
          </p>
        </header>
        <section className={"dice"}>
          {diceEls}
        </section>
        <section className={"buttons"}>
          <button className={"buttons--roll-btn"} onClick={rollDice}>Roll</button>
        </section>
      </main>
    </div>
  )
}

export default App
