import React from "react";
import {Routes, Route} from "react-router-dom";

import './css/layout.css';
import { StyledMain } from "./style/StyledLayout";

import Introduction from "../Introduction";
import PostList from "../PostList";
import Portfolio from "../Portfolio";
import Cv from "../Cv";

function Main(){
    return(
        <StyledMain>
            <Routes>
                <Route path="/" element={<Introduction/>}/>
                <Route path="/blogposts" element={<PostList/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/cv" element={<Cv/>}/>
            </Routes>
        </StyledMain>
    );
}

export default Main;