import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

export class Quiz extends Component {
  state = {
    questions: 0,
    correct: 0,
    incorrect: 0
  };

  componentDidMount = () => {
    const { questions } = this.props;
    this.setState(() => ({
      questions: questions.length
    }));
  };

  render() {
    return (
      <View>
        <Text> QUIZ </Text>
      </View>
    );
  }
}

const mapStateToProps = ({}, deck) => ({
  deck
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
