import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import { View, Text, StyleSheet } from "react-native";
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

  render() {
    const { decks } = this.props;
    return (
      <View style={Styles.container}>
        {Object.keys(decks).map((deck) => {
          return <Deck key={deck} deck={decks[deck]} />;
        })}
      </View>
    );
  }
}

const mapStateToProps = (decks) => decks;

export default connect(mapStateToProps)(DeckList);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50
  }
});
