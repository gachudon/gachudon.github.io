import React from "react";
import {FaGithub} from "react-icons/fa";
import {IoMail} from "react-icons/io5";

import './css/layout.css';
import { StyledAside } from "./style/StyledLayout";

function Aside(){
    return(
        <StyledAside>
            <h2>허승돈</h2>
            <ul>
                <li><a href="mailto:doneson7@gmail.com"><IoMail/>Email</a></li>
                <li><a href="https://github.com/Katsudon8991/katsudon8991.github.io"><FaGithub/>Github</a></li>
            </ul>
        </StyledAside>
    );
}

export default Aside;