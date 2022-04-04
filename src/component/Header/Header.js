import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <div className='navigation'>

                <Link to='/Home'> Home</Link>
                <Link to="/Reviews"> Reviews</Link >

                <Link to='/Dashboard'>Dashboard</Link>
                <Link to='/Blogs'>Blogs</Link>
                <Link to='/About'>About</Link>

            </div>
        </div>
    );
};

export default Header;