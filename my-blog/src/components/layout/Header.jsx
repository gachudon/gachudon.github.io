import React from "react";

// import './css/layout.css';
import { StyledHeader, StyledLink} from "./style/StyledLayout";

function Header(){
    return(
        <StyledHeader>
            <StyledLink className="header-link" to="/">
                <h1>GaChuDon's Blog</h1>
            </StyledLink>
        </StyledHeader>
    );
}

export default Header;