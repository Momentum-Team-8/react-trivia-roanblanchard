import React, { useState } from 'react'
import he from 'he'

export const AnswerChoices = ({ answers, commitAnswer }) => {
    const [answered, setAnswered] = useState(false)
    const [correct, setCorrect] = useState(false)
    const [shuffled, setShuffled] = useState([])
    const { correctAnswer, incorrectAnswers } = answers


const allAnswers = [correctAnswer, ...incorrectAnswers]


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array
  }

  if (shuffled.length === 0) {
    const shuffledAnswers = shuffle(allAnswers)
    setShuffled(shuffledAnswers)
  }
 
  console.log(shuffled)





  const handleClick = (answer) => {
    setAnswered(true)
    if (correctAnswer === answer) {
        setCorrect(true)
    }
    commitAnswer()
  };



        if (answered && correct) {
            return (
                shuffled.map((item) => {
                    return (
                      <button
                        key={item}
                        class='answer-correct'>
                        {he.decode(item)}
                      </button>
                    )
                  })
            )
        } else if (answered && correct === false) {
            return (
                shuffled.map((item) => {
                    return (
                      <button
                        key={item}
                        class='answer-incorrect'>
                        {he.decode(item)}
                      </button>
                    )
                  })
            )
        } else {
            return shuffled.map((item) => {
                return (
                  <button
                    key={item}
                    class='answer'
                    onClick={() => {
                      handleClick(he.decode(item))
                    }}
                  >
                    {he.decode(item)}
                  </button>
                )
              })
        }
    
}