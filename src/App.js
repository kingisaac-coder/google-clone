import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import SearchPage from "./SearchPage";
import Home from "./Home";

function App() {
  return (
    //BEM naming convetion
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
