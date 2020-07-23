import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/entry.webpack';
import * as styles from '../css/resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const myResume = './static/images/Reesman_Resume.pdf';

export function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className={styles.resume}>
      <span className={styles.buttonGroup}>
        <button
          className={styles.button}
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber <= 1}
        >
          &lt;&lt;
        </button>
        <a className={styles.download} href={myResume} download='Reesman_Resume.pdf'>
          Download
        </a>
        <button
          className={styles.button}
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber >= numPages}
        >
          &gt;&gt;
        </button>
      </span>
      <div className={styles.document}>
        <Document file={myResume} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber}/>
        </Document>
      </div>
    </div>
  );
}
