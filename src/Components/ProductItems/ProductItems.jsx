import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductItems.css';
import Shoes from '../../shoe.json';

const ProductItems = () => {
    const { id } = useParams();
    const shoe = Shoes[id]
    return (
        <div className="productItem">
            <h1>SHOE CARNIVAL ONLINE : {shoe.name}</h1>
            <div className="singleProductLink">
            <div className="leftImg">
                <img src={shoe.img} alt="shoe" />
            </div>
            <div className="rightDetail">
                <h2>Name : {shoe.name}</h2>
                <h3>Price : {shoe.price}</h3>
                <button onClick={()=>alert(`You bought this item ${shoe.name}`)}>BUY Product</button>
            </div>
            </div>
        </div>
    );
}

export default ProductItems;
