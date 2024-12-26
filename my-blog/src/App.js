import './App.css';

import Main from './layout/Main';
import Aside from './layout/Aside';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Nav from './layout/Nav';

function App() {
  return (
    <div id="container">
      <Header/>
      <Nav/>
      <Main/>
      <Aside/>
      <Footer/>
    </div>
  );
}

export default App;
