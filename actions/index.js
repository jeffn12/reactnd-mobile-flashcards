// Actions for the Decks

export const RECEIVE_DECKS = "RECEIVE_DECKS";

export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks
  };
};
