import { Button } from 'react-materialize'
import PDF from 'react-pdf';
import React, { Component } from 'react';

class GetData_PDF extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentPage:1,
      pages:0
    };

    this._onDocumentComplete = this._onDocumentComplete.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  _onDocumentComplete (pages) {
    this.setState({
      pages: pages
    });
  }

  prevPage (ev) {
    ev.preventDefault();
    this.setState({
      currentPage: this.state.currentPage > 1 ? this.state.currentPage - 1 : 1
    });
  }

  nextPage (ev) {
    ev.preventDefault();
    this.setState({
      currentPage: this.state.currentPage < this.state.pages ? this.state.currentPage + 1 : this.state.pages
    });
  }

  render () {
    return (
      <div>
        <div className="center-btn">
          <Button waves="light" onClick={this.prevPage}>Previous page</Button>
          <Button waves="light" onClick={this.nextPage}>Next page</Button>
        </div>
        <div className="center-btn">
          <PDF file="./images/Reesman_Resume_Graduate.pdf" page={this.state.currentPage} onDocumentComplete={this._onDocumentComplete}/>
        </div>
        <div className="center-btn">
          <a href="./images/Reesman_Resume_Graduate.pdf" download="Reesman_Resume">
            <Button waves="light">Download</Button>
          </a>
        </div>
      </div>
    )
  }
}

export default GetData_PDF;