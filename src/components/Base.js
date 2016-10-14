import { Card, CardTitle } from 'react-materialize';
const React = require('react');
var Navigation = require('./NavigationController');
var GetData_Controller = require('./DataController');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            selectedKey:0,
            selectedObj:{}
        }
    },

    OnSelect: function(key,obj) {
        this.setState({
            selectedKey:key,
            selectedObj:obj
        });
    },

    render: function () {
        return(
            <div className="container">
                <Card className='small'
                    header={<CardTitle image="./images/space.jpeg">Paul R. Reesman</CardTitle>}>
                    <Navigation click={this.OnSelect} selectedKey={this.state.selectedKey}/>
                </Card>
                <GetData_Controller selectedKey={this.state.selectedKey} selectedObj={this.state.selectedObj}/>
            </div>
        );
    }
});