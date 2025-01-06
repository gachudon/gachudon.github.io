import React from "react";
import MarkdownReader from "./MarkdownReader";

function BlogPosts(){
    return(
        <div>
            <h2>Blog Posts</h2>
            <MarkdownReader fileName="testFile.md"/>
        </div>
    );
}

export default BlogPosts;