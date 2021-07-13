import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'



function App() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        axios.get('https://opentdb.com/api.php?amount=10')
            .then(res => setQuestions(res.data.results))
    }, [])

    console.log(questions)

    return (
        <>
        <h1>React Trivia</h1>
        {questions.map(question => {
            return (
                    <div>
                        <h2>{question.category}</h2>
                        <p>{question.question}</p>
                    </div>
            )
        })}
        </>
    )
}

export default App;
