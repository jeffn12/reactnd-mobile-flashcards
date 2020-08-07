import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

// Score dashboard display for end of quiz
export class QuizScoreDisplay extends Component {
  render() {
    const { correct, numQuestions } = this.props;
    return (
      <View style={Styles.container}>
        <Text style={Styles.dashTitle}>You Finished! Good job!</Text>
        <Text style={Styles.scoreText}>
          {correct}/{numQuestions} -{" "}
          {Math.round((correct / numQuestions) * 100)}%
        </Text>
      </View>
    );
  }
}

export default QuizScoreDisplay;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5
  },
  dashTitle: {
    fontSize: 40
  },
  scoreText: {
    fontSize: 30
  }
});
