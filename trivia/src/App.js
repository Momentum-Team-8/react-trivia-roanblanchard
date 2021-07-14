import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import { getCategoryList } from './api';



function App() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategoryList().then((categories) => setCategories(categories))
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
