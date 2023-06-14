import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
// import { Container } from 'react-bootstrap';
import Footer from './shared/Footer';
// import NavBar1 from './shared/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { LanguageContext } from './context/context';
import { useState } from 'react';
// import Cardlist from './component/CardList';

function App() {
  const [lang , setLang]=useState('en');
  return (
    <BrowserRouter>
      <LanguageContext.Provider value={{lang , setLang}}>
          <Router />
      </LanguageContext.Provider>
      <Footer />
    </BrowserRouter>

  )
}

export default App;
