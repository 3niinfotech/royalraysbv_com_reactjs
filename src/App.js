import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Header from './components/Header';
import Events from "./components/Events";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Journey from "./components/Journey";
import Policies from "./components/Policies";
import Rjc from "./components/Rjc";
import Provenance from "./components/Provenance";
import What from "./components/What";
import Contactus from "./components/Contactus";
import Custom from "./components/Custom";
import Diamond from './components/Diamond';
import About from "./components/About";
import Expert from "./components/Expert";
import History from "./components/History";
import Compliances from "./components/History";
import Alphabets from "./components/Alphabets";
import Blogs from "./components/Blogs";
import BlogDetail from "./components/BlogDetail";
function App() {
  return (
    <Router>
      <div>
        <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/alphabets" element={<Alphabets />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/the-journey" element={<Journey />} />
        <Route path="/compliance-1" element={<Policies />} />
        <Route path="/compliance-2" element={<Rjc />} />
        <Route path="/compliance-3" element={<Provenance />} /> */}
          {/* <Route path="/whatwedo" element={<What />} />*/
            <Route path="/contactus" element={<Contactus />} />}
          <Route path="/diamonds" element={<Diamond />} />
          {/* <Route path="/Customization" element={<Custom />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/experts" element={<Expert />} /> */}
          <Route path="/history" element={<History />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          {/* <Route path="/compliances" element={<Compliances />} /> */}

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

