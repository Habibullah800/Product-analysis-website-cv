import React from 'react';
import './ReviewCart.css'

const ReviewCart = (props) => {

    return (
        <div className='reviewContainer' >
            <img className='pic' src={props.product.Pic} alt="pic"></img>
            <h4>
                Name: {props.product.Name}
            </h4>
            <p>Review: {props.product.Review}</p>
            <h4>Rating: {props.product.Rating} </h4>
        </div>
    );
};

export default ReviewCart;