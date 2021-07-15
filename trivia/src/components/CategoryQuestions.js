import React, { useEffect, useState } from 'react'
import { getCategoryQuestions } from '../api'
import { CategoryList } from './CategoryList';

export const CategoryQuestions = (props) => {
    const [questions, setQuestions] = useState({})
    const [loading, setLoading] = useState(true)

    let { selectedCategory, categories, setSelectedCategory } = props

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
            <h1>React Trivia</h1>
            {questions.map((data) => {
                return (
                    <>
                    <div className="question">
                        <h2>{data.question}</h2>
                        {data.incorrect_answers.map((answer) => {
                            return(
                            <button>{answer}</button>
                            )
                        })}
                        <button>{data.correct_answer}</button>
                    </div>
                    </>
                )
            })}
            <button className='go-back' onClick={() => setSelectedCategory(null)}>← Back to Category List</button>
            </>
        )
}