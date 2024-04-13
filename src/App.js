import React, { useEffect } from "react";
import { Routes, Route, Navigate,useLocation  } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";

function App() {

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = "Your Default Title"; // Set your default title here
    let keywords = "default, keywords";
    // Set title based on the current route
    if (path === "/home") {
      title = "Home Page Title";   keywords = "home, page, keywords";
    } else if (path === "/about") {
      title = "About Page Title"; keywords = "about, page, keywords";
    } else if (path === "/Contact") {
      title = "Contact Page Title";keywords = "contact, page, keywords";
    }

    
    document.title = title;

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    } else {
      // If the meta keywords tag doesn't exist, create and append it to the head
      const newMetaKeywords = document.createElement("meta");
      newMetaKeywords.name = "keywords";
      newMetaKeywords.content = keywords;
      document.head.appendChild(newMetaKeywords);
    }
  }, [location]);
  return (
    <Routes>
     
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Redirect to the home page */}
      <Route path="/" element={<Navigate to="/home" />} />
     
    </Routes>
  );
}

export default App;
