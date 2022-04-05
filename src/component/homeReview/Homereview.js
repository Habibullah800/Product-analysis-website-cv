import React from 'react';

const Homereview = (props) => {

    return (
        <div>
            <div className='reviewContainer' >
                <img className='pic' src={props.product.Pic} alt="pic"></img>
                <h4>
                    Name: {props.product.Name}
                </h4>
                <p>Review: {props.product.Review}</p>
                <h4>Rating: {props.product.Rating} </h4>
            </div>
        </div>
    );
};

export default Homereview;