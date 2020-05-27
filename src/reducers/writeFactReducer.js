import { FETCH_FACT, NEW_FACT } from '../actions/type';

const intialState = {
  items: [],
  item: {}
};

export default function (state = intialState, action) {
  switch (action.type) {
    case FETCH_FACT:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
