import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Inquiry from './pages/Inquiry';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ScrollToTop from './pages/ScrollToTop'; // 👈 import this
import Wtbtn from './components/wtbtn'

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
        <Wtbtn/>
      </div>
    </Router>
  );
}

export default App;
