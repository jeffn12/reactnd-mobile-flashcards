import AsyncStorage from "@react-native-community/async-storage";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

export const DECKS_STORAGE_KEY = "Flashcards:decks";
export const NOTIFICATION_KEY = "Flashcards:notifications";

// Deck formatter - parse a JSON object from the AsyncObject response
export const formatDecks = (decks) => {
  return decks === null ? {} : JSON.parse(decks);
};
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

export const getUpdate = (deck, card) => {
  const update = Object.assign({}, deck, {
    questions: deck.questions.concat([card])
  });
  return update;
};

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: "Time to Study!",
    body: "👋 don't forget to practice your flashcards!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        console.log(Permissions);
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(17);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day"
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
