import React from "react";

// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
// assets
import pdf from "./assets/images/complete.pdf";
// component
import PdfViewer from "./components/PdfViewer";
// pages
import Login from "./pages/Login";
import "./App.scss";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Passing the PDF that we have to present as prop */}
        <Route
          path="/"
          element={<PdfViewer document={pdf} className="my-pdf-viewer" />}
        />
        {/* Not use in this */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
