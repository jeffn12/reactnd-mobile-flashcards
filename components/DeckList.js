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
          return (
            <View key={deck} style={Styles.deck}>
              <Text style={Styles.deckTitle}>{decks[deck].title}</Text>
              <Text style={Styles.questionLabel}>
                {decks[deck].questions.length} questions
              </Text>
              <Deck deck={decks[deck]} />
            </View>
          );
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
    marginTop: 40
  },
  deck: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
    flex: 1,
    width: "99%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: "grey",
    shadowRadius: 8,
    shadowOffset: { width: 5, height: 5 }
  },
  deckTitle: {
    fontSize: 40
  },
  questionLabel: {
    fontSize: 1,
    fontStyle: "italic"
  }
});
