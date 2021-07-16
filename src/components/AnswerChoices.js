import React from 'react'
import he from 'he'

export const AnswerChoices = ({ answers, setAnswered, checkAnswer, commitAnswer }) => {
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
  
    return array;
  }

  const handleClick = (answer) => {
    setAnswered(true)
    console.log(answer)
    checkAnswer(he.decode(correctAnswer) === answer)
    commitAnswer()
  };
  return shuffle(allAnswers).map((item) => {
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