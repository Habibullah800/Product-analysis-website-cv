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

                <div className='details'>
                    <h2>Best User Experience website </h2>
                    <p>While all of the Wix websites we show you today provide an A+ user experience, Liv White’s design is the leading contender in this category. The website for her risograph printing studio Dopple Press has earned her the winning spot for The Wix Awards 2021, on top of building a strong online presence for the small business.


                        The site’s clean and spacious layout, paired with a bright color scheme, makes it visually attractive and easy to read. White also worked with Velo to implement creative animations on each page, encouraging visitors to interact with her content.  </p>


                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/71W1KvLH3sL._AC_SS450_.jpg" alt="camera"></img>

                </div>
            </div>
            <hr></hr>
            <div className='review'>
                <h2> Here is product Reviews</h2>
                {
                    product.slice(0, 3).map(product => <Homereview
                        key={product.id}
                        product={product}
                    ></Homereview>)
                }
            </div>

            <div className='allReview'>
                <Link to="/Reviews">All Reviews</Link >
            </div>

        </div>

    );


};

export default Homebody;