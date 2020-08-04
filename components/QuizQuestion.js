import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export class QuizQuestion extends Component {
  state = {
    showAnswer: false
  };

  submitAnswer = (answer) => {
    const { handleAnswer } = this.props;
    this.setState({ showAnswer: false });
    handleAnswer(answer);
  };

  render() {
    const { showAnswer } = this.state;
    const { question, answer } = this.props.question;

    return (
      <View style={Styles.container}>
        <Text style={Styles.questionLabel}> Question: {question} </Text>
        <TouchableOpacity
          style={Styles.btn}
          onPress={() =>
            this.setState((currState) => ({
              showAnswer: !currState.showAnswer
            }))
          }
        >
          <Text>{showAnswer ? "HIDE" : "SHOW"} ANSWER</Text>
        </TouchableOpacity>
        {showAnswer && (
          <Text style={Styles.answerLabel}> Answer: {answer} </Text>
        )}
        <View style={Styles.btnContainer}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => this.submitAnswer("yes")}
          >
            <Text>YES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => this.submitAnswer("no")}
          >
            <Text>NO</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default QuizQuestion;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 5
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row"
  },
  btn: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    margin: 3,
    padding: 15
  }
});
