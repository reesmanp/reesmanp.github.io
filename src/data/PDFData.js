import { Button } from 'react-materialize'
let PDF = require('react-pdf');
let React = require('react');

var GetData_PDF = React.createClass({
    getInitialState: function () {
        return {
            currentPage:1,
            pages:0
        }
    },

    _onDocumentComplete: function(pages) {
        this.setState({
            pages: pages
        });
    },

    prevPage: function(ev) {
        ev.preventDefault();
        this.setState({
            currentPage: this.state.currentPage > 1 ? this.state.currentPage - 1 : 1
        });
    },

    nextPage: function(ev) {
        ev.preventDefault();
        this.setState({
            currentPage: this.state.currentPage < this.state.pages ? this.state.currentPage + 1 : this.state.pages
        });
    },

    render: function() {
        return (
            <div>
                <div className="center-btn">
                    <Button waves="light" onClick={this.prevPage}>Previous page</Button>
                    <Button waves="light" onClick={this.nextPage}>Next page</Button>
                </div>
                <div className="center-btn">
                    <PDF file="./images/Reesman_Resume_Graduate.pdf" page={this.state.currentPage} onDocumentComplete={this._onDocumentComplete}/>
                </div>
            </div>
        )
    }
});

module.exports = GetData_PDF;