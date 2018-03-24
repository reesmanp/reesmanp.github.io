import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appStore from '../reducers';
import Banner from './banner';
import Navigation from './navigation';
import Portfolio from './portfolio';
import Resume from './resume';
import * as styles from '../css/base.css';

const store = createStore(appStore);

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
