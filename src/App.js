import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import ImageGenerator from "./components/Image_Generator";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ImageGenerator" element={<ImageGenerator />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
