import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </div>
    )
}