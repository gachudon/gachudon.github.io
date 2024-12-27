import React from "react";
import {Routes, Route} from "react-router-dom";

import './css/layout.css';

import Introduction from "../Introduction";
import PostList from "../PostList";
import Portfolio from "../Portfolio";
import Cv from "../Cv";

function Main(){
    return(
        <main>
            <Routes>
                <Route path="/" element={<Introduction/>}/>
                <Route path="/blogposts" element={<PostList/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/cv" element={<Cv/>}/>
            </Routes>
        </main>
    );
}

export default Main;