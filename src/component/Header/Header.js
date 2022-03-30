import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>react router practice</h1>
        <Link to='/'>Home</Link>
        <Link to='/Friend'>Friend</Link>
        <Link to='/Extra'>Extra</Link>
        <Link to='/Posts'>Posts</Link>
       
        </div>
    );
};

export default Header;