import { Map } from 'immutable';
import { navigation as Actions } from '../actions';

interface Action {
  type: string;
  selectedItem: number;
}

const initialState = Map({
  navigation: Map({
    selectedItem: 0
  })
});

export const navigation = (state = initialState.get('navigation'), action: Action) => {
  switch (action.type) {
    case Actions.SELECT_BANNER:
      return state.set('selectedItem', action.selectedItem);
    default:
      return state;
  }
};
