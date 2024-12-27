import React from "react";
import {Link} from "react-router-dom";

import './css/layout.css';

function Header(){
    return(
        <header>
            <Link to="/">
                <h1>GaChuDon's Blog</h1>
            </Link>
        </header>
    );
}

export default Header;