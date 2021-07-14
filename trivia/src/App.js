import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import { getCategoryList } from './api';
import { CategoryList } from './components/CategoryList';



function App() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategoryList().then((categories) => setCategories(categories))
    }, [])

    return (
        <CategoryList categories={categories} />
    )
}

export default App;
