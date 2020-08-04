import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export class QuizQuestion extends Component {
  render() {
    const { handleAnswer } = this.props;
    const { question, answer } = this.props.question;
    return (
      <View>
        <Text> Question: {question} </Text>
        <Text> Answer: {answer} </Text>
        <TouchableOpacity onPress={() => handleAnswer("yes")}>
          <Text>YES</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAnswer("no")}>
          <Text>NO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default QuizQuestion;
