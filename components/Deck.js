import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// Components
import AddQuestion from "./AddQuestion";
import Quiz from "./Quiz";

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
        <View style={Styles.deck}>
          <Text style={Styles.deckTitle}>{title}</Text>
          <Text style={Styles.questionLabel}>
            {"  "}({questions.length} questions)
          </Text>
        </View>
        <AddQuestion deckId={title} />
        {/*  <TouchableOpacity style={Styles.submitBtn}>
          <Text>START A QUIZ</Text>
        </TouchableOpacity> */}
        <Quiz deck={deck} />
      </View>
    );
  }
}

export default Deck;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
    padding: "10px",
    borderColor: "black",
    borderWidth: "1px",
    borderRadius: "8px",
    shadowColor: "grey",
    shadowRadius: "8px",
    shadowOffset: { width: "5px", height: "5px" }
  },
  deck: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  deckTitle: {
    fontSize: "2rem"
  },
  questionLabel: {
    fontSize: "1rem",
    fontStyle: "italic",
    marginBottom: ".3rem"
  },
  submitBtn: {
    backgroundColor: "#F0F8FF",
    alignItems: "center",
    margin: "5px",
    width: "50%"
  }
});
