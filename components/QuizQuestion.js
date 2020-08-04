import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export class QuizQuestion extends Component {
  render() {
    const { handleAnswer } = this.props;
    const { question, answer } = this.props.question;
    return (
      <View style={Styles.container}>
        <Text style={Styles.questionLabel}> Question: {question} </Text>
        <Text style={Styles.answerLabel}> Answer: {answer} </Text>
        <View style={Styles.btnContainer}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => handleAnswer("yes")}
          >
            <Text>YES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => handleAnswer("no")}
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
    marginTop: "5px"
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row"
  },
  quizHead: {
    fontSize: "1rem"
  },
  btn: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    margin: "3px",
    padding: "15px"
  }
});
