import React from 'react';
import LoadData from '../hook-Data/LoadData';
import ReviewCart from '../ReviewCart/ReviewCart';

const Reviews = () => {
    const [product,] = LoadData()
    return (
        <div>
            <h2>This is reviews{product.length}</h2>
            {
                product.map(product => <ReviewCart
                    key={product.id}
                    product={product}
                ></ReviewCart>)
            }

        </div>
    );
};

export default Reviews;