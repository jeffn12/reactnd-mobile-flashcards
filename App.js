import React from "react";
import { StyleSheet, Text, View } from "react-native";
// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
// Components
import DeckList from "./components/DeckList";
import AddDeck from "./components/AddDeck";

export default function App() {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <View style={styles.container}>
        <Text>My First React Native App!</Text>
        <AddDeck />
        <DeckList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center"
  }
});
