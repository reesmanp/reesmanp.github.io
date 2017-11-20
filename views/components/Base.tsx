import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appStore from '../reducers';
import Banner from './Banner';
import Navigation from './Navigation';

const store = createStore(appStore);

export const Base = () => (
  <Provider store={store}>
    <div className='container is-fluid'>
      <Banner/>
      <Navigation/>
    </div>
  </Provider>
);
