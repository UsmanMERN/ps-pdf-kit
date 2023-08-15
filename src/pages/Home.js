import React from "react";
// components
import PdfViewerComponent from "../components/PdfViewer";
// assets
import pdf from "../assets/images/complete.pdf";
import Sidebar from "../components/Sidebar";
function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <PdfViewerComponent document={pdf} className="my-pdf-viewer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
