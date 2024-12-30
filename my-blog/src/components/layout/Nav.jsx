import React from "react";
import {Link} from "react-router-dom";

import './css/layout.css';
import './css/Nav.css';
import { StyledNav } from "./style/StyledLayout";

function Nav(){
    return(
        <StyledNav>
            <ul>
                <li>
                    <Link to="/blogposts">
                        <h2>Blog Posts</h2>
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio">
                        <h2>Portfolio</h2>
                    </Link>
                </li>
                <li>
                    <Link to="/cv">
                        <h2>CV</h2>
                    </Link>
                </li>
            </ul>
        </StyledNav>
    );
}

export default Nav;