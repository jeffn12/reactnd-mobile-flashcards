import AsyncStorage from "@react-native-community/async-storage";
import {
  DECKS_STORAGE_KEY,
  formatDecks,
  makeNewDeck,
  getUpdate
} from "./helpers";

// Get all decks
export const getDecks = () =>
  AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatDecks);

// Get one deck back for the given id
export const getDeck = (id) => {
  return getDecks().then((decks) => {
    return decks[id];
  });
};

// Initialize a new deck with the given title
export const saveDeckTitle = async (title) => {
  return await getDecks().then(
    async (decks) =>
      await AsyncStorage.setItem(
        DECKS_STORAGE_KEY,
        JSON.stringify({
          ...decks,
          [title]: makeNewDeck(title)
        })
      )
  );
};

// Add a new card (aka question) to a deck
export const addCardToDeck = async (title, card) => {
  return await getDeck(title)
    .then((deck) => getUpdate(deck, card))
    .then(async (update) => {
      await getDecks().then(async (decks) => {
        await AsyncStorage.setItem(
          DECKS_STORAGE_KEY,
          JSON.stringify({
            ...decks,
            [title]: update
          })
        );
      });
    });
};
