import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <div className='navigation'>
                <a href='/Home'>Home</a>
                <Link to="/Reviews"> Reviews</Link >
                <a href='/Reviews'>Reviews</a>
                <a href='/Dashboard'>Dashboard</a>
                <a href='/Blogs'>Blogs</a>
                <a href='/About'>About</a>
            </div>
        </div>
    );
};

export default Header;