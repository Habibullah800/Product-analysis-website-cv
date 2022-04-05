import React from 'react';

const Homereview = (props) => {

    return (
        <div>
            <div className='reviewContainer' >
                <img className='pic' src={props.product.Pic} alt="pic"></img>
                <h4>
                    <small>Name: {props.product.Name}</small>
                </h4>
                <p>Review: {props.product.Review}</p>
                <small><h4>Rating: {props.product.Rating} </h4></small>
            </div>
        </div>
    );
};

export default Homereview;