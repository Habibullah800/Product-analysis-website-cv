import React from 'react';
import { Link } from 'react-router-dom';
import Homereview from '../homeReview/Homereview';
import LoadData from '../hook-Data/LoadData';
import "./HomeBody.css"

const Homebody = () => {
    const [product,] = LoadData()
    return (
        <div >
            <div className='homeContainer'>
                <div> <h1>Hello</h1></div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/71W1KvLH3sL._AC_SS450_.jpg" alt="camera"></img>

                </div>
            </div>
            <div>
                <h2> All Reviews</h2>

                <h2>This is reviews{product.length}</h2>
                {
                    product.slice(0, 3).map(product => <Homereview
                        key={product.id}
                        product={product}
                    ></Homereview>)
                }
            </div>
            <Link to="/Reviews">All Reviews</Link >
        </div>

    );


};

export default Homebody;