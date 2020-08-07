import React, { Component } from "react";
// Components
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// Styles
import { white, blue } from "../utils/colors";

export class QuizQuestion extends Component {
  state = {
    showAnswer: false
  };

  // Handle an answer button press
  submitAnswer = (answer) => {
    const { handleAnswer } = this.props;
    this.setState({ showAnswer: false }); // make sure the answer is hidden when the next question appears
    handleAnswer(answer);
  };

  render() {
    const { showAnswer } = this.state;
    const { question, answer } = this.props.question;

    return (
      <View style={Styles.container}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={Styles.questionText}> {question} </Text>
        </View>
        <View style={Styles.btnContainer}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => this.submitAnswer("yes")}
          >
            <Text style={Styles.btnText}>YES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => this.submitAnswer("no")}
          >
            <Text style={Styles.btnText}>NO</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={[Styles.btn, { width: 306 }]}
            onPress={() =>
              this.setState((currState) => ({
                showAnswer: !currState.showAnswer
              }))
            }
          >
            <Text style={Styles.btnText}>
              {showAnswer ? "HIDE" : "SHOW"} ANSWER
            </Text>
          </TouchableOpacity>
          {showAnswer && <Text style={Styles.answerLabel}> {answer} </Text>}
        </View>
      </View>
    );
  }
}

export default QuizQuestion;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  btn: {
    backgroundColor: blue,
    alignItems: "center",
    margin: 3,
    padding: 30,
    width: 150
  },
  btnText: {
    color: white,
    fontSize: 30
  },
  questionText: {
    fontSize: 40
  },
  answerLabel: {
    fontSize: 25,
    fontStyle: "italic",
    marginTop: 20
  }
});
