import {useState} from "react";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import styles from '../../styles/pdf.module.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;




export default function DisplayPdf({url}){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <div className={styles.container}>
            <Document
                className={styles.document}
                file={`${process.env.DB_HOST}${url}`}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page                 width={400}
                                      pageNumber={pageNumber} className={styles.page} />
                <div className={styles.navbar}>

                    <button
                        className={styles.bleft}
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                    >
                        Previous
                    </button>
                    <p className={styles.pnumber}>
                        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                    </p>
                    <button
                        className={styles.bright}

                        type="button"
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                    >
                        Next
                    </button>
                </div>
            </Document>

        </div>
    );
}

