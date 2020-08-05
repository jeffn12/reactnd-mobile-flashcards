import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

export class Deck extends Component {
  handleStartQuiz = () => {
    this.props.navigation.navigate("Quiz", {
      deck: this.props.deck
    });
  };

  handleAddQuestion = () => {
    console.log("Add Question To: ", this.props.deckId);
    this.props.navigation.navigate("AddQuestion", {
      deckId: this.props.deckId
    });
  };

  render() {
    const deck = this.props.decks[this.props.deckId];
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

const mapStateToProps = ({ decks }, props) => {
  return {
    decks,
    deckId: props.deckId ? props.deckId : props.route.params.deckId,
    props
  };
};

export default connect(mapStateToProps)(Deck);

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
