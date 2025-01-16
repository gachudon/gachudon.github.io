import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledHeader = styled.header`
    position:relative;
    width:25%;
    height:4rem;
    float:left;
    margin-bottom:3rem;
`;

export const StyledNav = styled.nav`
    position:relative;
    width: 75%;
    height: 4rem;
    float: left;
    margin-bottom:3rem;
    
    & ul{
        display:table;
        position:absolute;
        bottom:0;
    }
    & li{
        display:table-cell;
        padding-right:2rem;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration:none;
    
    &.header-link {
        position:absolute;
        bottom:0;
    }
`;

export const StyledMain = styled.main`
    width:75%;
    min-height:600px;
    float:left;
`;

export const StyledFooter = styled.footer`
    width:100%;
    height:100px;
    clear:left;
`;