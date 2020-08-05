import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";
import Deck from "./Deck";
// Helpers
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions";

/**
 * DeckList Component - this is the main view for the app, it will initialize data
 *
 */

export class DeckList extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;

    getDecks().then((decks) => dispatch(receiveDecks(decks)));
  };

  parseArrayData = (decks) => {
    let dataArray = [];
    Object.keys(decks).forEach((deck) => {
      dataArray.push(this.props.decks[deck]);
    });
    console.log(dataArray);
    return dataArray;
  };

  renderItem = ({ item }) => {
    return <Deck deck={item} />;
  };

  render() {
    const { decks } = this.props;
    return (
      <View style={Styles.container}>
        <FlatList
          data={this.parseArrayData(decks)}
          keyExtractor={(item) => item.title}
          renderItem={this.renderItem}
        ></FlatList>
      </View>
    );
  }
}

const mapStateToProps = (decks) => decks;

export default connect(mapStateToProps)(DeckList);

const Styles = StyleSheet.create({
  container: {
    marginTop: 50
  }
});

/**
 * render() {
    const { decks } = this.props;
    return (
      <Stack.Navigator>
        <Stack.Screen name="title">
          {() => <Button title="Press Me" />}
        </Stack.Screen>
        {Object.keys(decks).map((deck) => {
          return (
            <Stack.Screen key={deck} name={deck} options={{ title: deck }}>
              {() => <Deck deck={decks[deck]} />}
            </Stack.Screen>
          );
        })}
      </Stack.Navigator>
    );
  }
 */
