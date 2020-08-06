import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
// Components
import QuizQuestion from "./QuizQuestion";
import QuizScoreDisplay from "./QuizScoreDisplay";

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
    const { questions } = this.props.decks[this.props.deckId];
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
    this.setState((currState) => ({
      completed: true,
      currentQuestion: currState.currentQuestion + 1
    }));
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
    const deck = this.props.decks[this.props.deckId];
    const { questions, title } = deck;
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
          <View style={Styles.container}>
            <QuizScoreDisplay
              correct={this.state.correct}
              numQuestions={questions.length}
            />
            <View style={Styles.btnContainer}>
              <TouchableOpacity style={Styles.btn} onPress={this.handleRestart}>
                <Text>RESTART</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.btn}>
                <Text align="center">BACK TO DECK</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, { route }) => {
  const { deckId } = route.params;
  return {
    decks,
    deckId
  };
};

export default connect(mapStateToProps)(Quiz);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row"
  },
  quizHead: {
    fontSize: 20
  },
  btn: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    margin: 3,
    padding: 15
  }
});

/**
 *
 * The question is displayed, along with a button to show the answer.
 * Pressing the 'Show Answer' button displays the answer.
 *
 *
 *
 *
 * 'Back to Deck' buttons route correctly to their respective views.
 */
