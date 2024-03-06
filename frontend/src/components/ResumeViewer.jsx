import React , {useEffect, useState} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios'; 

const ResumeViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const url='/src/assets/Daniel_Avdiu_Resume.pdf'

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div>
            <Document
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
};
 
export default ResumeViewer;