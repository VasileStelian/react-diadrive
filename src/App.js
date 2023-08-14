import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import BodyHome from './components/BodyHome';
import Contact from './components/Contact';
import About from './components/About';




function App() {
  return (
    <Router>
        <div className="bg-gradient-to-b from-gray-600">
          <Navbar/>
          <Header/>
        </div>
        <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/despre" element={<About />} />
        {/* Catch-all route */}
        <Route path="*" element={<BodyHome />} />
    
        </Routes>
       <Footer/> 
      </Router>
  );
}

export default App;
