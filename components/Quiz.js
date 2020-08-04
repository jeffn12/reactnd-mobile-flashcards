import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
// Components
import QuizQuestion from "./QuizQuestion";

export class Quiz extends Component {
  state = {
    correct: 0,
    incorrect: 0,
    currentQuestion: 0,
    completed: false
  };

  /*  Handle a question answer.
   *    Expect "yes" or "no",
   *    mark as correct/incorrect
   *    update current question (check to make sure currentQuestion doesn't go out-of-range)
   */
  handleAnswer = (answer) => {
    const { questions } = this.props;
    this.setState(
      (currState) => ({
        correct: answer === "yes" ? currState.correct + 1 : currState.correct,
        incorrect:
          answer === "no" ? currState.incorrect + 1 : currState.incorrect
      }),
      () =>
        this.state.currentQuestion < questions.length - 1
          ? this.setState((currState) => ({
              currentQuestion: currState.currentQuestion + 1
            }))
          : this.handleEndOfQuiz()
    );
  };

  // Set the state to completed when the last question is answered
  handleEndOfQuiz = () => {
    this.setState(() => ({
      completed: true
    }));
    console.log("Finished Quiz! Here are some stats: ", this.state);
  };

  // Restart the quiz by re-initializing the state
  handleRestart = () => {
    this.setState(() => ({
      correct: 0,
      incorrect: 0,
      currentQuestion: 0,
      completed: false
    }));
  };

  render() {
    const { title, questions } = this.props;
    const { currentQuestion, completed } = this.state;
    return (
      <View style={Styles.container}>
        <Text style={Styles.quizHead}>
          {title}, {questions.length - currentQuestion} cards left
        </Text>
        {questions.length > 0 && !completed && (
          <QuizQuestion
            question={questions[currentQuestion]}
            handleAnswer={this.handleAnswer}
          />
        )}
        {completed && (
          <View>
            <Text>You are Done!</Text>
            <TouchableOpacity style={Styles.btn} onPress={this.handleRestart}>
              <Text>RESTART</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.btn}>
              <Text>BACK TO DECK</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = ({}, { deck }) => ({
  questions: deck.questions,
  title: deck.title
});

export default connect(mapStateToProps)(Quiz);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "5px"
  },
  quizHead: {
    fontSize: "1rem"
  },
  btn: {
    backgroundColor: "blue",
    alignItems: "center",
    fontSize: ".5rem"
  }
});

/**
 * The Quiz view starts with a question from the selected deck.
 * The question is displayed, along with a button to show the answer.
 * Pressing the 'Show Answer' button displays the answer.
 * Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'
 * The view displays the number of questions remaining.
 * When the last question is answered, a score is displayed. This can be displayed as a percentage of correct answers or just the number of questions answered correctly.
 * When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.
 * Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.
 */
