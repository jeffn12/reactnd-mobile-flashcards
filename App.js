import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
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
const Stack = createStackNavigator();

const DeckStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Flashcard Decks"
        component={DeckList}
        options={{ tabBarLabel: "My Decks" }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="My Decks" component={DeckStackScreen} />
          <Tab.Screen name="Add a Deck" component={AddDeck} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
