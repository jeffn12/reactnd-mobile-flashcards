import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import { View, Text } from "react-native";
import AddQuestion from "./AddQuestion";
// Helpers
import { getDecks } from "../utils/api";
import { showAsyncStorage } from "../utils/helpers";
import { receiveDecks } from "../actions";

/**
 * DeckList Component - this is the main view for the app, it will initialize data
 *
 */

export class DeckList extends Component {
  componentDidMount = () => {
    showAsyncStorage();

    const { dispatch } = this.props;

    getDecks().then((decks) => dispatch(receiveDecks(decks)));
  };

  render() {
    const { decks } = this.props;
    return (
      <View>
        {console.log("rendering decklist")}
        <Text>Decks in your App:</Text>
        {Object.keys(decks).map((deck) => {
          return (
            <View key={deck}>
              <Text>{JSON.stringify(decks[deck])}</Text>
              <AddQuestion deckId={deck} />
            </View>
          );
        })}
      </View>
    );
  }
}

const mapStateToProps = (decks) => decks;

export default connect(mapStateToProps)(DeckList);
