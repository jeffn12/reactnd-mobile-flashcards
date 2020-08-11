# Mobile Flashcards App

Create your own flashcard decks so you can study and quiz yourself to remember what you need to! This application uses React Native (supplemented with Expo) to manage the UI, and Async Storage/Redux for state management.

## Getting Started

To use this application locally, you need:

1. Node.js & npm
1. Expo client app on a mobile device, or an iOS/Android simulator (_The best experience will be on a mobile device_)

Don't want to deal with downloading and installing anything?  Check out a web-based version on Surge: http://mobile-flashcards.surge.sh/
### Installation

1. `git clone https://github.com/jeffn12/reactnd-flashcards.git` to clone the repo
1. `npm install` - installs app dependencies
1. `npm start` - runs a server accessible from any platform (web, iOS, Android)
   - You may also run a platform specific server:
     - `npm run android` (for Android)
     - `npm run ios` (for iOS)
     - `npm run web` (for Web)

### Usage

Once the server is running, the application is ready to use. When you start "Mobile Flashcards", you will see a list of your flashcard decks. Use the tabs at the bottom to toggle between your decks, and the form to add a new one. Creating a new deck automatically takes you to it so you can start adding cards.

Touch one of the decks in your list and you will go to it's screen. From there, you can add questions to your deck, and take a quiz to practice your skills.

The quiz shows one question at a time, and you have as long as you need to think about the answer. Click a button to show the answer, and mark yourself right or wrong. At the end of the quiz, you will get a score, an option to retake it, and an option to return to that deck.

Have fun, and happy studying!

## Dependencies

1. expo: ~38.0.8,
1. expo-status-bar: ^1.0.2,
1. expo-permissions: ~9.0.1
1. @react-native-community/async-storage: ^1.11.0,
1. @react-native-community/masked-view: 0.1.10,
1. @react-navigation/bottom-tabs: ^5.8.0,
1. @react-navigation/native: ^5.7.3,
1. @react-navigation/stack: ^5.9.0,
1. react: ~16.11.0,
1. react-native: https://github.com/expo/react-native/archive/sdk-38.0.2.tar.gz,
1. react-native-gesture-handler: ~1.6.0,
1. react-native-reanimated: ~1.9.0,
1. react-native-safe-area-context: ~3.0.7,
1. react-native-screens: ~2.9.0,
1. react-redux: ^7.2.1,
1. redux: ^4.0.5,
1. react-native-web: ~0.11.7,
1. react-dom: ~16.11.0,

## Thanks

This project was bootstrapped with ["Expo-CLI"](https://docs.expo.io/workflow/expo-cli/)
