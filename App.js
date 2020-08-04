import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { enableScreens } from "react-native-screens";
// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
// Components
import DeckList from "./components/DeckList";
import AddDeck from "./components/AddDeck";

enableScreens();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <View style={styles.container}>
        <Text>TEST</Text>
        <NavigationContainer style={styles.container}>
          <Tab.Navigator>
            <Tab.Screen name="Decks" component={DeckList} />
            <Tab.Screen name="Add a Deck" component={AddDeck} />
          </Tab.Navigator>
        </NavigationContainer>
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
