import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'



function App() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://opentdb.com/api_category.php')
            .then(res => setCategories(res.data.trivia_categories))
    }, [])

    console.log(categories)

    return (
        <>
        <h1>React Trivia</h1>
        {categories.map(category => {
            return (
                    <div key={category.id}>
                        <p>{category.name}</p>
                    </div>
            )
        })}
        </>
    )
}

export default App;
