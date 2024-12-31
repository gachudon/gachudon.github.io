import React from "react";
import {Routes, Route} from "react-router-dom";

import Introduction from "../pages/Introduction";
import BlogPosts from "../pages/BlogPosts";
import Portfolio from "../pages/Portfolio";
import Cv from "../pages/Cv";

function MainRouter(){
    return(
        <Routes>
            <Route path="/" element={<Introduction/>}/>
            <Route path="/blogposts" element={<BlogPosts/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/cv" element={<Cv/>}/>
        </Routes>
    );
}

export default MainRouter;