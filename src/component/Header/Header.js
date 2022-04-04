import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <h2>welcome to this website</h2>

            <div className='navigation'>
                <a href='/home'>Home</a>
                <a href='/reviews'>Reviews</a>
                <a href='/dashboard'>Dashboard</a>
                <a href='/blogs'>Blogs</a>
                <a href='/about'>About</a>
            </div>


        </div>
    );
};

export default Header;