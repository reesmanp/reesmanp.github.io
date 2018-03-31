import * as React from 'react';
import {connect} from 'react-redux';
import _jsonValidator from '../wasm/json-validator';

let jsonValidator;
_jsonValidator().then(instance => {
    jsonValidator = instance.exports.jsonValidator;
});

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const WASMTest = () => (
  <div>{jsonValidator()}</div>
);

export default connect(mapStateToProps, mapDispatchToProps)(WASMTest);
