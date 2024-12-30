import React from "react";
import { BrowserRouter} from "react-router-dom";

import { StyledContainer } from "./style/StyledApp";

import Main from '../layout/Main';
import Aside from '../layout/Aside';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Nav from '../layout/Nav';

function App() {
  return (
    <BrowserRouter>
      <StyledContainer>
        <Header/>
        <Nav/>
        <Aside/>
        <Main/>
        <Footer/>
      </StyledContainer>
    </BrowserRouter>
  );
}

export default App;
