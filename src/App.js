import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Apartment from './pages/Apartment';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/apartment/:id' element={<Apartment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
