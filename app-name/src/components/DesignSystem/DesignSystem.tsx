import React from 'react';
import Button from './Buttons/Button/Button';
import Cards from './Cards/Cards';
// import { products } from './../data/products';

const DesignSystem: React.FC = () => {
    return ( 
        <div className="design-system">
            <h1 style={{ fontSize: '1.5rem', color: 'black' }}>Design System</h1>
            <Button.Button1 />
            <Button.Button2 />
            <Button.Button3 />
            <Cards/>

        </div>
    );
}

export default DesignSystem;
