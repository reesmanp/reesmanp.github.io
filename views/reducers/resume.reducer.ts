import { Map } from 'immutable';
import { resume as Actions } from '../actions';

interface Action {
  type: string;
  amount: number,
  page: number
}

const initialState = Map({
  pages: 0,
  page: 1
});

export const resume = (state = initialState, action: Action) => {
  switch (action.type) {
    case Actions.PAGES:
      return state.set('pages', action.amount);
    case Actions.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
};
