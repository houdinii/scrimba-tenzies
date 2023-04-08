import React from 'react'
import './App.css'
import Die from "../components/Die.jsx";
import {nanoid} from "nanoid";
import Confetti from "react-confetti";


/*
* Extra Credit Ideas:
* CSS: Put real dots on the dice
* JS: Track the number of rolls
* JS: Track how much time it took
* localStorage: Save best time
*
* */

function App() {
  const generateNewDie = () => {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice(){
    let arr = [];
    for(let i=0; i<10; i++){
      arr.push(generateNewDie())
    }
    return arr
  }

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    let valid = true
    const checkValue = dice[0].value

    dice.forEach(die => die.value !== checkValue || !die.isHeld ? valid = false : "")

    if(valid){
      setTenzies(true)
      console.log("You Win!")
    }
  }, [dice])

  const rollDice = () => {
    if(tenzies) {
      setTenzies(false)
      setDice(allNewDice())
    } else {
      setDice(dice.map(die => !die.isHeld ? generateNewDie() : die))
    }
  }

  function holdDice(id){
    setDice(dice.map(die => {
      return die.id === id
        ? {
          ...die,
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
        {tenzies &&  <Confetti/>}
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
          <button className={"buttons--roll-btn"} onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </section>
      </main>
    </div>
  )
}

export default App
