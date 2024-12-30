import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import Layout from "./Layout.jsx";

import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import Branches from "./routes/Branches.jsx";
import About from "./routes/About.jsx";
import NotFound404 from "./routes/404.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/branches" element={<Branches/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound404/>}/>
        </Route>
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
    
  </StrictMode>
);
