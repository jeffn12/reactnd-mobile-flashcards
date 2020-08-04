import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

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
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 5
  },
  dashTitle: {
    fontSize: 3
  },
  scoreText: {
    fontSize: 2
  }
});
