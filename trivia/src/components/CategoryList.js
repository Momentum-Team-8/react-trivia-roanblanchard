import React from 'react'

export const CategoryList = (props) => {
    const { categories, setSelectedCategory } = props
    return (
        <>
        <h1>React Trivia</h1>
        {categories.map(category => {
            return (
                    <div key={category.id}>
                        <p>{category.name}</p>
                        <button className='button' onClick={() => setSelectedCategory(category.id)}>Select category</button>
                    </div>
            )
        })}
        </>
    )
}