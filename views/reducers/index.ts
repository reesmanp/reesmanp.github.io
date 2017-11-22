import { combineReducers } from 'redux-immutable';
import { navigation } from './navigation';

const appStore = combineReducers({
  navigation
});

export default appStore;
