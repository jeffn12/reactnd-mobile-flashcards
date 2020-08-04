import AsyncStorage from "@react-native-community/async-storage";
import {
  DECKS_STORAGE_KEY,
  formatDecks,
  makeNewDeck,
  getUpdate,
  showAsyncStorage
} from "./helpers";

// Get all decks
export const getDecks = () => {
  console.log("(Decks) Async: ");
  showAsyncStorage();
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatDecks);
};

// Get one deck back for the given id
export const getDeck = (id) => {
  console.log("Async: ");
  showAsyncStorage();
  return getDecks().then((decks) => {
    console.log("getDecks: ", decks);
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
    .then(async (deck) => await getUpdate(deck, card))
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
