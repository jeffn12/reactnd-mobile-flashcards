import AsyncStorage from "@react-native-community/async-storage";

export const DECKS_STORAGE_KEY = "Flashcards:decks";

// Deck formatter - parse a JSON object from the AsyncObject response
export const formatDecks = (decks) => (decks === null ? {} : JSON.parse(decks));

// Deck creator - object for an empty deck using given title
export const makeNewDeck = (title) => ({
  title,
  questions: []
});

export const showAsyncStorage = () => {
  AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, item) => {
    console.log({ decks: JSON.parse(item) });
  });
};
