import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf1 from "./pdfs/document.pdf";
import img1 from "./pdfs/img1.jpg";
import { useLocation } from "react-router-dom";

import "./viewReport.css";

//import Btn from "../../components/button/Btn";

export default function ViewReport() {
    // const cid = "QmaNxbQNrJdLzzd8CKRutBjMZ6GXRjvuPepLuNSsfdeJRJ";

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    // useEffect(intial,[])

    const location = useLocation();

    function initilizeState() {
        return `QmaNxbQNrJdLzzd8CKRutBjMZ6GXRjvuPepLuNSsfdeJRJ`;
    }

    // const [pdf, setPdf] = useState(() => cid);

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    return (
        <>
            <div className="headingReport">Report</div>
            <div className="outerLayerforReport">
                <div className="outerForReport1">
                    <Document
                        file={`https://ipfs.infura.io/ipfs/${location.state.CID}`}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page
                                className="overFlowHandle"
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                            />
                        ))}
                    </Document>
                </div>
            </div>
        </>
    );
}
