import React, { useMemo } from 'react';
import shuffle from 'lodash';

export const AnswerChoices = ({ answers, setAnswered, checkAnswer, commitAnswer }) => {
  const { correctAnswer, incorrectAnswers } = answers
//   const shuffledAnswers = useMemo(
//     () => shuffle([correctAnswer, ...incorrectAnswers]),
//     [correctAnswer, incorrectAnswers]
//   )

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

const shuffledAnswers = shuffle(allAnswers)

  const handleClick = (answer) => {
    setAnswered(true)
    checkAnswer(correctAnswer === answer)
    commitAnswer()
  };
  return shuffledAnswers.map((item) => {
    return (
      <button
        key={item}
        class='answer'
        onClick={() => {
          handleClick(item)
        }}
      >
        {item}
      </button>
    )
  })
}