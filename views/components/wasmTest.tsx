import * as React from 'react';
import {connect} from 'react-redux';
import {greet} from '../../wasm/wasm-test/pkg';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const WASMTest = () => (
  <div>{greet()}</div>
);

export default connect(mapStateToProps, mapDispatchToProps)(WASMTest);
