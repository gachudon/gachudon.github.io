import { useEffect, useState } from "react";
import React from "react";
import ReactMarkdown from "react-markdown";

function MarkdownReader(props){
    const [markdown, setMarkdown] = useState("");

    useEffect(()=>{
        fetch(`./_posts/${props.fileName}`)
        .then((response)=>response.text())
        .then((text)=> setMarkdown(text));
    },[]);

    return(
        <ReactMarkdown>
            {markdown}
        </ReactMarkdown>
    );
}

export default MarkdownReader;