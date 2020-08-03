import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// Components
import AddQuestion from "./AddQuestion";

/**
  - [x] title
  - [x] \# of cards in the deck
  - [-] option to add a new card
  - [ ] option to start a quiz with the deck
 */

export class Deck extends Component {
  render() {
    const { deck } = this.props;
    const { title, questions } = deck;

    return (
      <View style={Styles.container}>
        <Text style={Styles.deck}>
          {title}: {questions.length} questions
        </Text>
        <AddQuestion deckId={title} />
        <TouchableOpacity style={Styles.submitBtn}>
          <Text>START A QUIZ</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Deck;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "5px",
    padding: "10px",
    borderColor: "black",
    borderWidth: "1px",
    borderRadius: "8px",
    shadowColor: "grey",
    shadowRadius: "8px",
    shadowOffset: { width: "5px", height: "5px" }
  },
  deck: {
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    margin: "10px",
    width: "50%"
  },
  submitBtn: {
    backgroundColor: "#F0F8FF",
    alignItems: "center",
    margin: "5px",
    width: "50%"
  }
});
