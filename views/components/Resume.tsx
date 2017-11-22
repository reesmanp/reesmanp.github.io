import * as React from 'react';
import { connect } from 'react-redux';
import { resume as Actions } from '../actions';
import { Document, Page, setOptions } from 'react-pdf/build/entry.webpack';

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
  addPages: (item: pdfObject) => undefined;
  changePage: (item: number) => undefined;
}

const mapStateToProps = state => ({
  isActive: state.getIn(['navigation', 'tabs'])[state.getIn(['navigation', 'selectedItem'])] === 'Resume',
  pages: state.getIn(['resume', 'pages']),
  page: state.getIn(['resume', 'page'])
});

const mapDispatchToProps = dispatch => ({
  addPages: (item: pdfObject) => dispatch(Actions.pages(item.pdfInfo.numPages)),
  changePage: (item: number) => dispatch(Actions.changePage(item))
});

const classnames = 'button is-primary is-outlined';

const ResumeComponent = (props: ResumeProps) => (
  props.isActive &&
    <div className='card has-text-centered'>
      <span>
        <a className={classnames} onClick={() => props.page > 1 && props.changePage(props.page - 1)}>
          &lt;&lt; Back
        </a>
        <a className={classnames} href={myResume} download='Reesman_Resume.pdf'>
          Download
        </a>
        <a className={classnames} onClick={() => props.page < props.pages && props.changePage(props.page + 1)}>
          Forward &gt;&gt;
        </a>
      </span>
      <div className='columns'>
        <div className='column' />
        <div className='column'>
          <Document file={myResume} onLoadSuccess={props.addPages}>
            <Page pageNumber={props.page} />
          </Document>
        </div>
        <div className='column' />
      </div>
      <p>Page {props.page} of {props.pages}</p>
      <br />
      <br />
    </div>
);

const Resume = connect(mapStateToProps, mapDispatchToProps)(ResumeComponent);

export default Resume;
