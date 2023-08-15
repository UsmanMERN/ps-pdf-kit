import React, { useEffect, useRef } from "react";

// get the fields of the PDF after filling the Data into them
import { formFieldValues } from "../utils/formValues";

// valtio state management

// import { useSnapshot } from "valtio";
import state from "../store/instance";

// export default function PdfViewerComponent(props) {
//   const containerRef = useRef(null);
//   useEffect(() => {
//     const container = containerRef.current;
//     let instance, PSPDFKit;

//     // show the PDF in Browser
//     (async function () {
//       PSPDFKit = await import("pspdfkit");
//       PSPDFKit.unload(container);
//       instance = await PSPDFKit.load({
//         container,
//         styleSheets: ["./my-psd.css"],
//         document: props.document,
//         baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
//         toolbarItems: [
//           ...PSPDFKit.defaultToolbarItems,
//           {
//             type: "form-creator",
//           },
//         ],

//         pdfFormFields: true,
//       });

//       // hide the toolBar
//       // instance.setViewState((viewState) =>
//       //   viewState.set("showToolbar", !viewState.showToolbar)
//       // );

//       // set the Data into fields of PDF
//       instance.applyOperations([
//         {
//           type: "applyInstantJson",
//           instantJson: {
//             format: "https://pspdfkit.com/instant-json/v1",
//             formFieldValues,
//           },
//         },
//       ]);
//       // get all fields Details of the PDF
//       // const defaultItems = PSPDFKit.defaultToolbarItems;
//       // console.log(defaultItems);
//     })();
//     return () => PSPDFKit && PSPDFKit.unload(container);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
// }
// PdfViewerComponent.js

// ... (previous imports)

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    let instance, PSPDFKit;

    // show the PDF in Browser
    (async function () {
      PSPDFKit = await import("pspdfkit");
      PSPDFKit.unload(container);
      instance = await PSPDFKit.load({
        container,
        styleSheets: ["./my-psd.css"],
        document: props.document,
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
        toolbarItems: [
          ...PSPDFKit.defaultToolbarItems,
          {
            type: "form-creator",
          },
        ],
        pdfFormFields: true,
      });

      // Set the instance in the state
      state.instance = instance;
      state.PSPDFKit = PSPDFKit;
      // hide the toolBar
      // instance.setViewState((viewState) =>
      //   viewState.set("showToolbar", !viewState.showToolbar)
      // );

      // set the Data into fields of PDF
      instance.applyOperations([
        {
          type: "applyInstantJson",
          instantJson: {
            format: "https://pspdfkit.com/instant-json/v1",
            formFieldValues,
          },
        },
      ]);

      // get all fields Details of the PDF
      // const defaultItems = PSPDFKit.defaultToolbarItems;
      // console.log(defaultItems);
    })();
    return () => PSPDFKit && PSPDFKit.unload(container);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
