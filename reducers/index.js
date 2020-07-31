import { RECEIVE_DECKS, ADD_DECK, ADD_CARD_TO_DECK } from "../actions";

export const decks = (state = { decks: {} }, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        decks: { ...state.decks, ...action.decks }
      };
    case ADD_DECK:
      return {
        decks: {
          ...state,
          [action.title]: { title: action.title, questions: [] }
        }
      };
    case ADD_CARD_TO_DECK:
      const { title, card } = action;
      const update = Object.assign({}, state[title], {
        questions: state[title].questions.concat([card])
      });
      return {
        decks: {
          ...state,
          [action.title]: update
        }
      };
    default:
      return state;
  }
};

export default decks;
