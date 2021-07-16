import React, { useEffect, useState } from 'react'
import { getCategoryQuestions } from '../api'
import { CategoryList } from './CategoryList';
import he from 'he'

export const CategoryQuestions = (props) => {
    const [questions, setQuestions] = useState({})
    const [loading, setLoading] = useState(true)

    const { selectedCategory, categories, setSelectedCategory } = props

    useEffect(() => {
        getCategoryQuestions(selectedCategory).then(data => {
            setQuestions(data)
            setLoading(false)
        })
    }, [selectedCategory])

    

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
                        {data.incorrect_answers.map((answer) => {
                            return (
                            <button className="answer">{he.decode(answer)}</button>
                            )
                        })}
                        <button className="answer">{he.decode(data.correct_answer)}</button>
                    </div>
                    </>
                )
            })}
            
            </>
        )
}