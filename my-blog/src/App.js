import React from "react";
import { BrowserRouter} from "react-router-dom";

import './App.css';

import Main from './components/layout/Main';
import Aside from './components/layout/Aside';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

function App() {
  return (
    <BrowserRouter>
      <div id="container">
        <Header/>
        <Nav/>
        <Main/>
        <Aside/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
