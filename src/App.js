import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Navbar from './components/pages/navbar/Navbar';
import Register from './components/pages/Register/Register';

function App() {
  return (
    <div className="">
    
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
