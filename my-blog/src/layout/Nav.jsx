import React from "react";
import './css/layout.css';
import './css/Nav.css';

function Nav(){
    return(
        <nav>
            <ul>
                <li>
                    <a href="#">Blog Posts</a>
                </li>
                <li>
                    <a href="#2">Portfolio</a>
                </li>
                <li>
                    <a href="#3">CV</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;