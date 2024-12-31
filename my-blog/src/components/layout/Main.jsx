import React from "react";

import './css/layout.css';
import { StyledMain } from "./style/StyledLayout";

import MainRouter from "../router/MainRouter";

function Main(){
    return(
        <StyledMain>
            <MainRouter/>
        </StyledMain>
    );
}

export default Main;