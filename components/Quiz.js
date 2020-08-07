import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import QuizQuestion from "./QuizQuestion";
import QuizScoreDisplay from "./QuizScoreDisplay";
// Notifications
import { setLocalNotification, clearLocalNotification } from "../utils/helpers";
// Styles
import { blue, white } from "../utils/colors";

export class Quiz extends Component {
  state = {
    correct: 0,
    incorrect: 0,
    currentQuestion: 0,
    completed: false
  };

  // When the user answers the question, update stats and move on
  handleAnswer = (answer) => {
    const { questions } = this.props.decks[this.props.deckId];
    this.setState(
      (currState) => ({
        correct: answer === "yes" ? currState.correct + 1 : currState.correct,
        incorrect:
          answer === "no" ? currState.incorrect + 1 : currState.incorrect
      }),
      () =>
        // End the quiz if there are no questions left
        this.state.currentQuestion < questions.length - 1
          ? this.setState((currState) => ({
              currentQuestion: currState.currentQuestion + 1
            }))
          : this.handleEndOfQuiz()
    );
  };

  // Set the state to completed when the last question is answered and reset the notification to tomorrow
  handleEndOfQuiz = () => {
    this.setState((currState) => ({
      completed: true,
      currentQuestion: currState.currentQuestion + 1
    }));
    clearLocalNotification().then(setLocalNotification);
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

  // Return to the deck when the user presses the button
  handleGoBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const deck = this.props.decks[this.props.deckId];
    const { questions, title } = deck;
    const { currentQuestion, completed } = this.state;
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
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
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={Styles.btn}
                  onPress={this.handleRestart}
                >
                  <Text style={Styles.btnText}>RESTART</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={Styles.btn}>
                  <Text style={Styles.btnText} onPress={this.handleGoBack}>
                    BACK TO DECK
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        {!completed && (
          <View style={{ alignSelf: "flex-end" }}>
            <Text style={Styles.quizHead}>
              {questions.length - currentQuestion} cards left in {title}
            </Text>
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
    alignItems: "center"
  },
  quizHead: {
    fontSize: 20,
    fontStyle: "italic",
    margin: 10
  },
  btn: {
    backgroundColor: blue,
    alignItems: "center",
    margin: 10,
    padding: 20,
    width: 300
  },
  btnText: {
    color: white,
    fontSize: 30
  }
});

/**
 *
 *
 *
 *
 *
 *
 *
 * 'Back to Deck' buttons route correctly to their respective views.
 */
