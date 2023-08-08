import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "../src/Pages/Homepage";
import Singleshow from "../src/Pages/Singleshow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
    <div>
    <Navbar/>
    <Routes>
       
       <Route path="/" element={<Homepage/>} />
       <Route path="/:id" element={<Singleshow/>} />
     </Routes>
    </div>
        
        
  
    </>
  );
}

export default App;
