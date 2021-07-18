import React, { useEffect, useState } from 'react'
import { getCategoryQuestions } from '../api'
import he from 'he'
import { AnswerChoices } from "./AnswerChoices"

export const CategoryQuestions = (props) => {
    const [questions, setQuestions] = useState({})
    const [loading, setLoading] = useState(true)
    

    const { selectedCategory, setSelectedCategory } = props

    useEffect(() => {
        getCategoryQuestions(selectedCategory).then(data => {
            setQuestions(data)
            setLoading(false)
        })
    }, [selectedCategory])
    

    const commitAnswer = () => {

    }

    

    return loading
        ?   <><h1>React Trivia</h1>
            <p className="loading">'loading questions...'</p></>
        : (
            <>
            <h1 onClick={() => setSelectedCategory(null)}>React Trivia</h1>
            <button className='go-back' onClick={() => setSelectedCategory(null)}>← Back to Category List</button>
            <h2 className="cat-name">{questions[0].category}</h2>
            {questions.map((data) => {
                return (
                    <>
                    <div className="question">
                        <h2>{he.decode(data.question)}</h2>
                        <div>
                            <AnswerChoices
                                answers={{
                                correctAnswer: data.correct_answer,
                                incorrectAnswers: data.incorrect_answers,
                                }}
                                commitAnswer={commitAnswer}
                            />
                        </div>
                    </div>
                    </>
                )
            })}
            
            </>
        )
}