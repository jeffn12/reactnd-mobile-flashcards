import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import { View, Text, StyleSheet } from "react-native";
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
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "5px"
  },
  deck: {
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    margin: "10px",
    width: "50%",
    borderColor: "black",
    borderWidth: "1px",
    borderRadius: "8px",
    shadowColor: "grey",
    shadowRadius: "8px",
    shadowOffset: { width: "5px", height: "5px" }
  },
  deckTitle: {
    fontSize: "2rem"
  },
  questionLabel: {
    fontSize: "1rem",
    fontStyle: "italic"
  }
});
