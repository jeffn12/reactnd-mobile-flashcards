import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput
} from "react-native";
// Helpers
import { addCardToDeck, getDecks } from "../utils/api";
import { receiveDecks } from "../actions";

export class AddQuestion extends Component {
  state = {
    question: "",
    answer: ""
  };

  handleQuestionInput = (text) => {
    this.setState(() => {
      return {
        question: text
      };
    });
  };

  handleAnswerInput = (text) => {
    this.setState(() => {
      return {
        answer: text
      };
    });
  };

  submitQuestion = () => {
    const { dispatch, deckId } = this.props;
    const { question, answer } = this.state;

    // Add a card to the deck in async storage
    addCardToDeck(deckId, { question, answer }).then(() =>
      getDecks().then((decks) => {
        // once card is in aynsc store, update redux
        dispatch(receiveDecks(decks));
      })
    );

    this.setState(() => ({
      question: "",
      answer: ""
    }));
  };

  render() {
    const { question, answer } = this.state;

    return (
      <View styles={styles.container}>
        <Text>Add a new Question:</Text>
        <Text>Question: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.handleQuestionInput(text)}
          value={question}
        />
        <Text>Answer: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.handleAnswerInput(text)}
          value={answer}
        />
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={this.submitQuestion}
          disabled={question === "" || answer === ""}
        >
          <Text>ADD QUESTION</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({}, { navigation, route }) => {
  return {
    navigation,
    deckId: route.params.deckId
  };
};

export default connect(mapStateToProps)(AddQuestion);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white"
  },
  submitBtn: {
    backgroundColor: "#F0F8FF",
    alignItems: "center"
  }
});
