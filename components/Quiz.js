import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
// Components
import QuizQuestion from "./QuizQuestion";

export class Quiz extends Component {
  state = {
    numQuestions: 0,
    correct: 0,
    incorrect: 0,
    currentQuestion: 0
  };

  componentDidMount = () => {
    const { questions } = this.props;
    this.setState(() => ({
      numQuestions: questions.length
    }));
  };

  /*  Handle a question answer.
   *    Expect "yes" or "no",
   *    mark as correct/incorrect
   *    update current question (check to make sure currentQuestion doesn't go out-of-range)
   */
  handleAnswer = (answer) => {
    console.log("Answering: ", answer);
    this.setState((currState) => ({
      numQuestions: currState.numQuestions++
    }));
  };

  render() {
    const { title, questions } = this.props;
    const { currentQuestion } = this.state;
    return (
      <View>
        <Text>
          QUIZ yourself on {questions.length} questions in your {title} deck
        </Text>
        <QuizQuestion question={questions[currentQuestion]} />
      </View>
    );
  }
}

const mapStateToProps = ({}, { deck }) => ({
  questions: deck.questions,
  title: deck.title
});

export default connect(mapStateToProps)(Quiz);

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
