import React from 'react';
import './ReviewCart.css'

const ReviewCart = (props) => {
    return (
        <div className='reviewContainer' >
            <img className='pic' src={props.product.Pic} alt="pic"></img>
            <h4>
                <small>Name: {props.product.Name}</small>
            </h4>
            <p>Review: {props.product.Review}</p>
            <h4> <small>Rating: {props.product.Rating} </small> </h4>
        </div>
    );
};

export default ReviewCart;