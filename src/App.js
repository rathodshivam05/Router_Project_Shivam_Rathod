import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './compoent/Footer';
import Login from './compoent/Login';
import Navbar from './compoent/Navbar';
import Requiredauth from './HOC/Requiredauth';
import About from './pages/About';
import Cartpage from './pages/Cartpage';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Home from './pages/Home';
import Product from './pages/Product';
import Productid from './pages/Productid';

function App() {
  return (
    <>

    <Navbar />
    <Routes>
      
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/product" element={ <Requiredauth>  <Product /> </Requiredauth>} />    
    <Route path="/productid/:id" element={<Requiredauth> <Productid /> </Requiredauth>} />    
    <Route path="/cartpage" element={<Requiredauth> <Cartpage /> </Requiredauth>} />
    <Route path="/about" element={<About />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>

    <Footer />
    
    </>
  );
}

export default App;
