import React from "react";
import {Routes, Route} from "react-router-dom";

import Introduction from "../pages/Introduction";
import BlogPosts from "../pages/BlogPosts";
import Portfolio from "../pages/Portfolio";
import Cv from "../pages/Cv";
import MarkdownReader from"../pages/MarkdownReader";

function MainRouter(){
    return(
        <Routes>
            <Route path="/" element={<Introduction/>}/>
            <Route path="/postList" element={<BlogPosts/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/cv" element={<Cv/>}/>
            <Route path="/blogposts" element={<MarkdownReader/>}/>
        </Routes>
    );
}

export default MainRouter;