import { combineReducers } from 'redux-immutable';
import { navigation } from './navigation.reducer';
import { resume } from './resume.reducer';

const appStore = combineReducers({
  navigation,
  resume
});

export default appStore;
