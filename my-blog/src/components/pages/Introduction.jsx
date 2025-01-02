import React from "react";

function Introduction(){
    return(
        <section>
            <article>
                <h2>블로그 소개</h2>
                <p>
                    풀스택 개발자를 준비하고 있는 개발자 블로그입니다. 이 블로그는 github page를 이용하여 작성하고 있습니다.
                </p>
                <p>블로그 기술스택</p>
                <ul style={{'list-style-type':'disc'}}>
                    <li>Tools: Node.js, VSCode</li>
                    <li>VCS: Git</li>
                    <li>Library: React</li>
                    <li>Packages
                        <ul style={{'list-style-type':'square'}}>
                            <li>react-router-dom</li>
                            <li>styled-component</li>
                            <li>gh-pages</li>
                        </ul>
                    </li>
                </ul>
            </article>
        </section>
    );
}

export default Introduction;