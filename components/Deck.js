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
  handleStartQuiz = () => {
    /* <Quiz deck={this.props.deck} /> */
  };

  handleAddQuestion = () => {
    <AddQuestion deckId={this.props.title} />;
  };

  render() {
    const { deck } = this.props.deck ? this.props : this.props.route.params;
    const { title, questions } = deck;

    return (
      <View style={Styles.container}>
        <View style={Styles.deckInfo}>
          <Text style={Styles.deckTitle}>{title}</Text>
          <Text style={Styles.questionLabel}>
            {"  "}({questions.length} questions)
          </Text>
        </View>
        <TouchableOpacity
          style={Styles.submitBtn}
          onPress={this.handleAddQuestion}
        >
          <Text>ADD A QUESTION</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.submitBtn}
          onPress={this.handleStartQuiz}
        >
          <Text>START A QUIZ</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Deck;

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: "grey",
    shadowRadius: 8,
    shadowOffset: { width: 5, height: 5 }
  },
  deckInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 5
  },
  deckTitle: {
    fontSize: 20,
    fontWeight: "bold"
  },
  questionLabel: {
    fontSize: 15,
    fontStyle: "italic",
    marginBottom: 3
  },
  submitBtn: {
    backgroundColor: "#F0F8FF",
    alignItems: "center",
    margin: 5,
    width: "50%"
  }
});
