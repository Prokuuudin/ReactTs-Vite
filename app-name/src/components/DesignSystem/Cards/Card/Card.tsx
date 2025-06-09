import React from 'react';
import "./../../../styles/Card.css";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    onBuy: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onBuy }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <button className="card-button" onClick={onBuy}>Купить</button>
        </div>
    );
};

export default Card;
