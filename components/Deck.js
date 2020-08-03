import React, { Component } from "react";
import { View, Text } from "react-native";
// Components
import AddQuestion from "./AddQuestion";

/**
  - title
  - \# of cards in the deck
  - option to add a new card
  - option to start a quiz with the deck
 */

export class Deck extends Component {
  render() {
    const { deck } = this.props;
    const { title, questions } = deck;

    return (
      <View>
        <Text>
          {title}: {questions.length} questions
        </Text>
        <AddQuestion deckId={title} />
      </View>
    );
  }
}

export default Deck;
