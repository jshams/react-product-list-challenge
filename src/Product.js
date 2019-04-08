import React from 'react';

const Product = ({ title, desc, price, cat }) => {
    return (
        <div className="item-card">
            <h1 className="title">{title}</h1>
            <p className="cat">{cat}</p>
            <p className="desc">{desc}</p>
            <p className="price">${price}</p>
        </div>
    )
}

export default Product