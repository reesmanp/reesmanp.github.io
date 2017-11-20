import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appStore from '../reducers';
import Banner from './Banner';
import Navigation from './Navigation';
import Portfolio from './Portfolio';

const store = createStore(appStore);

export const Base = () => (
  <Provider store={store}>
    <div className='container is-fluid'>
      <Banner/>
      <Navigation/>
      <Portfolio/>
    </div>
  </Provider>
);
