import React from "react";
import Main from "./pages/Main";
import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
