import React from 'react';

const ItemListContainer = ({ text }) => {
    return (
        <div className="item-list-container">
        <h2>{text}</h2>
        <p>Se vienen cositas...</p>
        </div>
);
};

export default ItemListContainer;