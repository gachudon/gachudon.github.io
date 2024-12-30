import React from "react";
import {Link} from "react-router-dom";

// import './css/layout.css';
import { StyledHeader } from "./style/StyledLayout";

function Header(){
    return(
        <StyledHeader>
            <Link to="/">
                <h1>GaChuDon's Blog</h1>
            </Link>
        </StyledHeader>
    );
}

export default Header;