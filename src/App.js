import React from "react";

// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
// assets
// import pdf from "./assets/images/complete.pdf";
// component
// import PdfViewer from "./components/PdfViewer";
// pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./App.scss";

// state management
// import { useSnapshot } from "valtio";
// import state from "./store/instance";
function App() {
  // const instance = useSnapshot(state);
  // console.log(instance);
  return (
    <BrowserRouter>
      <Routes>
        {/* Passing the PDF that we have to present as prop */}
        <Route path="/" element={<Home />} />
        {/* Not use in this */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
