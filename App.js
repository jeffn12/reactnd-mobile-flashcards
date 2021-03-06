import React, { Component } from "react";
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
import AddQuestion from "./components/AddQuestion";
import Deck from "./components/Deck";
import Quiz from "./components/Quiz";
// Styles
import { blue } from "./utils/colors";
import { setLocalNotification } from "./utils/helpers";

// Configure Navigation
enableScreens();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator Setup
const DeckStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Decks" component={DeckList} />
      <Stack.Screen
        name="Deck"
        component={Deck}
        options={({ route }) => {
          return {
            headerTitle: route.params.deckId
          };
        }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={({ route }) => ({
          headerTitle: `Quiz (${route.params.deckId})`
        })}
      />
      <Stack.Screen
        name="AddQuestion"
        component={AddQuestion}
        options={() => ({
          headerTitle: "Add a Card"
        })}
      />
    </Stack.Navigator>
  );
};

export default class App extends Component {
  componentDidMount = () => {
    // Set the local notification when the app loads
    setLocalNotification();
  };

  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: blue,
              labelStyle: {
                fontSize: 20
              }
            }}
          >
            <Tab.Screen name="My Decks" component={DeckStackScreen} />
            <Tab.Screen name="Add a Deck" component={AddDeck} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
