import * as React from 'react';
import { connect } from 'react-redux';
import { resume as Actions } from '../actions';
import { Document, Page } from 'react-pdf/build/entry.webpack';

const myResume = require('../../static/images/Reesman_Resume.pdf');

interface ResumeProps {
  isActive: boolean;
  pages: number;
  page: number;
  addPages: (item: number) => undefined;
  changePage: (item: number) => undefined;
}

const mapStateToProps = state => ({
  isActive: state.getIn(['navigation', 'tabs'])[state.getIn(['navigation', 'selectedItem'])] === 'Resume',
  pages: state.getIn(['resume', 'pages']),
  page: state.getIn(['resume', 'page'])
});

const mapDispatchToProps = dispatch => ({
  addPages: (item: number) => dispatch(Actions.pages(item)),
  changePage: (item: number) => dispatch(Actions.changePage(item))
});

const classnames = 'button is-primary is-outlined';

const ResumeComponent = (props: ResumeProps) => (
  props.isActive &&
    <div className='card has-text-centered'>
      <span>
        <a className={classnames} onClick={() => props.page > 0 && props.changePage(props.page--)}>
          Back
        </a>
        <a className={classnames} href={myResume} download='Reesman_Resume.pdf'>
          Download
        </a>
        <a className={classnames} onClick={() => props.page < props.pages && props.changePage(props.page++)}>
          Forward
        </a>
      </span>
      <Document file={myResume} onLoadSuccess={props.addPages}>
        <Page pageNumber={props.page} />
      </Document>
      <p>Page {props.page} of {props.pages}</p>
    </div>
);

const Resume = connect(mapStateToProps, mapDispatchToProps)(ResumeComponent);

export default Resume;
