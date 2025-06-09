import React from 'react';
import Button from './Buttons/Button/Button';
import Card from './Card/Card';

const DesignSystem: React.FC = () => {
    return ( 
        <div className="design-system">
            <h1 style={{ fontSize: '1.5rem', color:"black" }}>Design System</h1>
            <Button.Button1/>
            <Button.Button2/>
            <Button.Button3/>
            <Card
                title="Смарт-часы"
                description="Умные часы с мониторингом здоровья и уведомлениями."
                imageUrl="https://example.com/smartwatch.jpg"
                onBuy={() => alert('Товар добавлен в корзину')}
            />
        </div>
     );
}

export default DesignSystem;