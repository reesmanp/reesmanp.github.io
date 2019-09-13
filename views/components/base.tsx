import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appStore from '../reducers';
import Banner from './banner';
import Navigation from './navigation';
import Portfolio from './portfolio';
import Resume from './resume';
//import Test from './wasmTest';
import {resume as Actions} from '../actions';
import * as styles from '../css/base.css';

const store = createStore(appStore);

window.onresize = () => (
  store.dispatch(Actions.pageResize(window.innerWidth))
);

export const Base = () => (
  <Provider store={store}>
    <div className={styles.container}>
      <Banner/>
      <Navigation/>
      <Portfolio/>
      <Resume/>
    </div>
  </Provider>
);
