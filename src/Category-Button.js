import React from 'react'
import './Category-Button.css'

const CategoryButton = (props) => {
    let isSelected = false
    return (
        <button
            onClick={() => props.onClick(props.label)}
            className={(isSelected ? "category-button selected" : "category-button")}
        >{props.label}</button>
    )
}

export default CategoryButton