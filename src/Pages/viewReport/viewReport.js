import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf1 from "./pdfs/document.pdf"
import "./viewReport.css"
//import Btn from "../../components/button/Btn";

export default function ViewReport() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }


    return (

        <>
            <div className="headingReport">
                Report
            </div>
            <div className="outerLayerforReport">

                <div className="outerForReport1">
                            <Document  file={pdf1} onLoadSuccess={onDocumentLoadSuccess}>
                                {Array.from(
                                    new Array(numPages),
                                    (el, index) => (
                                        <Page
                                            className="overFlowHandle"
                                            key={`page_${index + 1}`}
                                            pageNumber={index + 1}
                                        />
                                    )
                                )}
                            </Document>
                </div>
            </div>
        </>
    );
}