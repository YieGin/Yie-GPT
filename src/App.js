import React from "react";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import ImageGenerator from "./components/Image_Generator";
function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ImageGenerator" element={<ImageGenerator />}></Route>
      </Routes>
    </MemoryRouter>
  );
}

export default App;
