import * as React from 'react';
import { connect } from 'react-redux';
import { resume as Actions } from '../actions';
import { Document, Page, setOptions } from 'react-pdf/dist/entry.webpack';
import * as styles from '../css/resume.css';

const myResume = require('../../static/images/Reesman_Resume.pdf');
setOptions({
  workerSrc: '/dist/pdf.worker.js'
});

interface pdfInfo {
  numPages: number;
}

interface pdfObject {
  pdfInfo: pdfInfo;
}

interface ResumeProps {
  isActive: boolean;
  pages: number;
  page: number;
  pixels: number;
  addPages: (item: pdfObject) => undefined;
  changePage: (item: number) => undefined;
}

const mapStateToProps = state => ({
  isActive: state.getIn(['navigation', 'tabs'])[state.getIn(['navigation', 'selectedItem'])] === 'Resume',
  pages: state.getIn(['resume', 'pages']),
  page: state.getIn(['resume', 'page']),
  pixels: state.getIn(['resume', 'pixels'])
});

const mapDispatchToProps = dispatch => ({
  addPages: (item: pdfObject) => dispatch(Actions.pages(item.pdfInfo.numPages)),
  changePage: (item: number) => dispatch(Actions.changePage(item))
});

const getDocumentScale = (pixels: number) => {
  if (pixels < 700) {
    return (pixels / 700)  * .75;
  }
  return 1;
};

const ResumeComponent = (props: ResumeProps) => (
  props.isActive &&
    <div className={styles.resume}>
      <span className={styles.buttonGroup}>
        <button
          className={styles.button}
          onClick={() => props.changePage(props.page - 1)} disabled={props.page <= 1}
        >
          &lt;&lt; Back
        </button>
        <a className={styles.download} href={myResume} download='Reesman_Resume.pdf'>
          Download
        </a>
        <button
          className={styles.button}
          onClick={() => props.changePage(props.page + 1)} disabled={props.page >= props.pages}
        >
          Forward &gt;&gt;
        </button>
      </span>
      <div className={styles.document}>
        <Document file={myResume} onLoadSuccess={props.addPages}>
          <Page pageNumber={props.page} scale={getDocumentScale(props.pixels)}/>
        </Document>
      </div>
    </div>
);

const Resume = connect(mapStateToProps, mapDispatchToProps)(ResumeComponent);

export default Resume;
