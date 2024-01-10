import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import Experience from "./Pages/Experience/Experience";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contacts from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import "./App.scss";  

function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<div ><Profile /></div>} />
        <Route path="/profile" element={<div ><Profile /></div>} />
        <Route path="/skills" element={<div ><Skills /></div>} />
        <Route path="/experience" element={<div ><Experience /></div>} />
        <Route path="/contacts" element={<div><Contacts /></div>} />
        <Route path="/projects" element={<div><Projects /></div>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
