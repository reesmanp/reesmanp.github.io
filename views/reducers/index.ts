import { combineReducers } from 'redux-immutable';
import { navigation } from './navigation';
import { resume } from './resume';

const appStore = combineReducers({
  navigation,
  resume
});

export default appStore;
