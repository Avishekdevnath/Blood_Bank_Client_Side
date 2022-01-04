import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import Navbar from './components/pages/navbar/Navbar';

function App() {
  return (
    <div className="">
    
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
