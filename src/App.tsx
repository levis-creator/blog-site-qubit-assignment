import { useState } from "react";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-28 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
