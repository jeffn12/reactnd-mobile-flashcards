import React, { Component } from "react";
import { Text, View } from "react-native";

export class QuizScoreDisplay extends Component {
  render() {
    const { correct, numQuestions } = this.props;
    return (
      <View>
        <Text>You Finished! Good job!</Text>
        <Text>
          {correct}/{numQuestions} -{" "}
          {Math.round((correct / numQuestions) * 100)}%
        </Text>
      </View>
    );
  }
}

export default QuizScoreDisplay;
