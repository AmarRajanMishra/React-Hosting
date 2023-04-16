
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Error from './Error/Error';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='*' element={<Error/>} ></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
