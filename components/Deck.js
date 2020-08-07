import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
// Styles
import { blue, white } from "../utils/colors";

export class Deck extends Component {
  handleStartQuiz = () => {
    this.props.navigation.navigate("Quiz", {
      deckId: this.props.deckId
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
        <View style={Styles.deck}>
          <Text style={Styles.deckTitle}>{title}</Text>
          <Text style={Styles.questionLabel}>{questions.length} questions</Text>
          <TouchableOpacity style={Styles.btn} onPress={this.handleAddQuestion}>
            <Text style={Styles.btnText}>ADD A QUESTION</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.btn} onPress={this.handleStartQuiz}>
            <Text style={Styles.btnText}>START A QUIZ</Text>
          </TouchableOpacity>
        </View>
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  deck: {
    padding: 15,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: "grey",
    shadowRadius: 8,
    shadowOffset: { width: 5, height: 5 }
  },
  deckTitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 2
  },
  questionLabel: {
    fontSize: 15,
    fontStyle: "italic",
    marginBottom: 5,
    marginLeft: 2
  },
  submitBtn: {
    backgroundColor: "#F0F8FF",
    alignItems: "center",
    margin: 5,
    width: "50%"
  },
  btn: {
    backgroundColor: blue,
    alignItems: "center",
    margin: 3,
    padding: 20,
    width: 300
  },
  btnText: {
    color: white,
    fontSize: 20
  }
});
