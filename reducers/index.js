import { RECEIVE_DECKS } from "../actions";

export const decks = (state = { decks: {} }, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        decks: { ...state.decks, ...action.decks }
      };
    default:
      return state;
  }
};

export default decks;
