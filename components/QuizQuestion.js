import React, { Component } from "react";
import { Text, View } from "react-native";

export class QuizQuestion extends Component {
  render() {
    const { question, answer } = this.props.question;
    return (
      <View>
        <Text> Question: {question} </Text>
        <Text> Answer: {answer} </Text>
      </View>
    );
  }
}

export default QuizQuestion;
