import React from "react";
import Card from "./Card/Card";
import { products } from "../../data/products";

const Cards: React.FC = () => {
    return (
        <div className="cards">
            {products.map((product) => (
                <Card
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    onBuy={product.onBuy}
                />
            ))}
        </div>
    );
};

export default Cards;

