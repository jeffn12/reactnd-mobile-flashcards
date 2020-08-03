import AsyncStorage from "@react-native-community/async-storage";
import {
  DECKS_STORAGE_KEY,
  formatDecks,
  makeNewDeck,
  getUpdate
} from "./helpers";

// Get all decks
export const getDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatDecks);
};

// Get one deck back for the given id
export const getDeck = (id) => {
  return getDecks().then((decks) => decks[id]);
};

// Initialize a new deck with the given title
export const saveDeckTitle = async (title) => {
  return await AsyncStorage.setItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [title]: makeNewDeck(title)
    })
  );
};

// Add a new card (aka question) to a deck
export const addCardToDeck = (title, card) => {
  return getDeck(title)
    .then((deck) => getUpdate(deck, card))
    .then((update) => {
      AsyncStorage.setItem(
        DECKS_STORAGE_KEY,
        JSON.stringify({
          [title]: update
        })
      );
    });
};
