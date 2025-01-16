import React from "react";
import {FaGithub} from "react-icons/fa";
import {IoMail} from "react-icons/io5";

import './css/layout.css';
import { StyledAside,ProfileAvatar } from "./style/StyledAside";

function Aside(){
    return(
        <StyledAside>
            <ProfileAvatar>
                <img src="https://media.timeout.com/images/102578110/617/347/image.jpg"/>
            </ProfileAvatar>
            <h2>허승돈</h2>
            <ul>
                <li><a href="mailto:doneson7@gmail.com"><IoMail/>Email</a></li>
                <li><a href="https://github.com/Katsudon8991/"><FaGithub/>Github</a></li>
            </ul>
        </StyledAside>
    );
}

export default Aside;