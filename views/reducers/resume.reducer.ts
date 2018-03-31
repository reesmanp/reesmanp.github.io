import { Map } from 'immutable';
import { resume as Actions } from '../actions';

interface Action {
  type: string;
  payload: number;
}

const initialState = Map({
  pages: 0,
  page: 1,
  pixels: window.innerWidth
});

export const resume = (state = initialState, action: Action) => {
  switch (action.type) {
    case Actions.PAGES:
      return state.set('pages', action.payload);
    case Actions.CHANGE_PAGE:
      return state.set('page', action.payload);
    case Actions.PAGE_RESIZE:
      return state.set('pixels', action.payload);
    default:
      return state;
  }
};
