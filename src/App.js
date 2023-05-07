import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ImageGenerator from "./components/Image_Generator";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ImageGenerator" element={<ImageGenerator />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
