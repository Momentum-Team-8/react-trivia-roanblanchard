import React from 'react'

export const CategoryList = (props) => {
    const { categories } = props
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