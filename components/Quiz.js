import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

export class Quiz extends Component {
  state = {
    numQuestions: 0,
    correct: 0,
    incorrect: 0
  };

  componentDidMount = () => {
    const { questions } = this.props;
    this.setState(() => ({
      numQuestions: questions.length
    }));
  };

  render() {
    const { title, questions } = this.props;
    return (
      <View>
        <Text>
          QUIZ yourself on {questions.length} questions in your {title} deck
        </Text>
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
