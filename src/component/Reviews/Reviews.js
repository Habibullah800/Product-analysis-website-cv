import React from 'react';
import LoadData from '../hook-Data/LoadData';
import ReviewCart from '../ReviewCart/ReviewCart';
import "./Review.css"

const Reviews = () => {
    const [product,] = LoadData()
    return (
        <div className='review'>
            <h2>Here is our all Website reviews</h2>
            {
                product.map(product => <ReviewCart
                    key={product.id}
                    product={product}
                ></ReviewCart>)
            }
        </div >
    );
};

export default Reviews;