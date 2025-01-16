import styled from 'styled-components';

export const StyledAside = styled.aside`
    width:20%;
    float: left;
    margin-right:5%;
    &>h2 {
        text-align:center;
    }
`;

export const ProfileAvatar = styled.div`
    max-width:100%;
    overflow:hidden;
    border-radius:50%;
    border: 1px solid #f2f3f3;

    &>img{
        max-width: 423.19px;
        margin-left:-40%;
    }
`;