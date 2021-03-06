import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// Styles
import { blue, white } from "../utils/colors";

export class Deck extends Component {
  // Navigate to the component when user presses the button
  handleStartQuiz = () => {
    this.props.navigation.navigate("Quiz", {
      deckId: this.props.deckId
    });
  };

  // Navigate to the component when the user presses the button
  handleAddQuestion = () => {
    this.props.navigation.navigate("AddQuestion", {
      deckId: this.props.deckId
    });
  };

  render() {
    const deck = this.props.decks[this.props.deckId];
    const { title, questions } = deck;

    return (
      <View
        style={[
          Styles.container,
          { alignItems: this.props.route ? "center" : "flex-start" }
        ]}
      >
        <View
          style={[Styles.deck, { width: !this.props.route ? "95%" : "auto" }]}
        >
          <Text style={Styles.deckTitle}>{title}</Text>
          <Text style={Styles.questionLabel}>{questions.length} cards</Text>
          {this.props.route && (
            <View>
              <TouchableOpacity
                style={Styles.btn}
                onPress={this.handleAddQuestion}
              >
                <Text style={Styles.btnText}>ADD A CARD</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.btn}
                onPress={this.handleStartQuiz}
              >
                <Text style={Styles.btnText}>START A QUIZ</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, props) => {
  return {
    decks,
    deckId: props.deckId ? props.deckId : props.route.params.deckId,
    props
  };
};

export default connect(mapStateToProps)(Deck);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  deck: {
    padding: 15,
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: "grey",
    shadowRadius: 8,
    shadowOffset: { width: 5, height: 5 }
  },
  deckTitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 2
  },
  questionLabel: {
    fontSize: 15,
    fontStyle: "italic",
    marginBottom: 5,
    marginLeft: 2
  },
  btn: {
    backgroundColor: blue,
    alignItems: "center",
    margin: 3,
    padding: 20,
    width: 300
  },
  btnText: {
    color: white,
    fontSize: 20
  }
});
