import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// Helpers
import { addCardToDeck, getDecks } from "../utils/api";
import { receiveDecks } from "../actions";
// Styles
import { blue, white } from "../utils/colors";

export class AddQuestion extends Component {
  state = {
    question: "",
    answer: ""
  };

  // Handler for controlled components
  handleQuestionInput = (text) => {
    this.setState(() => {
      return {
        question: text
      };
    });
  };

  // Handler for controlled component
  handleAnswerInput = (text) => {
    this.setState(() => {
      return {
        answer: text
      };
    });
  };

  // Add a question to a deck in Async storage, then update redux
  submitQuestion = () => {
    const { dispatch, decks, deckId, navigation } = this.props;
    const { question, answer } = this.state;
    // Add a card to the deck in async storage
    addCardToDeck(deckId, { question, answer })
      .then(
        async () =>
          await getDecks().then(async (decks) => {
            // once card is in aynsc store, update redux
            await dispatch(receiveDecks(decks));
          })
      )
      .then(() =>
        this.setState(() => ({
          question: "",
          answer: ""
        }))
      ) // Go back to the deck when the question is created
      .then(() => navigation.navigate("Deck", { deck: decks[deckId] }));
  };

  render() {
    const { question, answer } = this.state;

    return (
      <View style={Styles.container}>
        <Text style={Styles.inputLabel}>Question: </Text>
        <TextInput
          style={Styles.textInput}
          onChangeText={(text) => this.handleQuestionInput(text)}
          value={question}
          placeholder="Enter your question"
          multiline={true}
        />
        <Text style={Styles.inputLabel}>Answer: </Text>
        <TextInput
          style={Styles.textInput}
          onChangeText={(text) => this.handleAnswerInput(text)}
          value={answer}
          placeholder="Enter the answer"
          multiline={true}
        />
        <TouchableOpacity
          style={Styles.btn}
          onPress={this.submitQuestion}
          disabled={question === "" || answer === ""}
        >
          <Text style={Styles.btnText}>ADD CARD</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, { navigation, route }) => {
  return {
    decks,
    navigation,
    deckId: route.params.deckId
  };
};

export default connect(mapStateToProps)(AddQuestion);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    height: 60,
    padding: 5,
    fontSize: 20,
    width: "90%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    shadowColor: "grey",
    shadowRadius: 8,
    shadowOffset: { width: 5, height: 5 },
    backgroundColor: "white"
  },
  inputLabel: {
    alignSelf: "flex-start",
    fontSize: 30,
    marginLeft: 20,
    marginTop: 20
  },
  btn: {
    backgroundColor: blue,
    alignItems: "center",
    margin: 30,
    padding: 20,
    width: 300
  },
  btnText: {
    color: white,
    fontSize: 25
  }
});
