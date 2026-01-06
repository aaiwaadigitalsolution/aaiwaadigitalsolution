// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home";
import DigitalMarketing from "./pages/DigitalMarketing";
import TechnicalSolutions from "./pages/TechnicalSolutions";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digitalmarketing" element={<DigitalMarketing />} />
          <Route path="/technicalsolutions" element={<TechnicalSolutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
