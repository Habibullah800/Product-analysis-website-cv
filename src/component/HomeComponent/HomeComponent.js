import React from 'react';
import Homereview from '../homeReview/Homereview';
import LoadData from '../hook-Data/LoadData';

const HomeComponent = () => {
    const [product,] = LoadData()
    return (
        <div>
            <h2>This is reviews{product.length}</h2>
            {
                product.map(product => <Homereview
                    key={product.id}
                    product={product}
                ></Homereview>)
            }
        </div>
    );
};

export default HomeComponent;