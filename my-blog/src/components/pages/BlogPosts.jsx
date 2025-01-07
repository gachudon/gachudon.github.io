import React from "react";
import {useEffect, useState} from "react";
import MarkdownReader from "./MarkdownReader";
import { StyledLink } from "../layout/style/StyledLayout";

/**
 * 원래의 계획
 * 1. blogposts 디렉토리 안의 모든 파일이름을 읽는다
 * 2. 읽은 파일이름을 배열에 저장한다.
 * 3. 저장한 이름들 수만큼 Link 컴포넌트의 'to' props에 저장한다.
 * 
 * 문제점
 * 1. 위 과정을 수행하기 위해서는 nodejs 서버단이 필요한데, github page는 서버단의 코드를 실행할 수 없다.
 * 
 * 해결방안
 * 1. (귀찮지만) json 파일을 하나 만들어서 md 파일을 업로드 할 때 마다 글 제목, 작성일자, 파일명을 가지는 리스트를 저장한다.
 * 2. json 파일을 읽어서 배열로 정리한다.
 * 3. 저장한 배열을 이용해서 Link 컴포넌트들을 만든다.
 */

function BlogPosts(){
    const [json, setJson] = useState('');

    useEffect(()=>{
        fetch('./blogposts/postList.json')
        .then((response)=>response.text())
        .then((text)=> setJson(JSON.parse(text)));
    },[]);
    return(
        <>
            <h2>Blog Posts</h2>
            <hr/>
            <div>
            <StyledLink><h3>{json.title}</h3></StyledLink>
            <p>{json.date}</p>
            </div>
        </>
    );
}

export default BlogPosts;