import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
// import { Container } from 'react-bootstrap';
import Footer from './shared/Footer';
// import NavBar1 from './shared/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Cardlist from './component/CardList';




function App() {
  return (
    <BrowserRouter>
        <>
      <Router />
    <Footer /></>
    </BrowserRouter>

  )
}

export default App;
