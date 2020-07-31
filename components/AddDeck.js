import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
// Helpers
import { saveDeckTitle, getDecks } from "../utils/api";
import { receiveDecks } from "../actions";

export class AddDeck extends Component {
  state = {
    title: ""
  };

  handleTitleInput = (title) => {
    this.setState(() => ({
      title
    }));
  };

  submit = () => {
    const { dispatch } = this.props;
    const { title } = this.state;
    saveDeckTitle(title).then(
      getDecks().then((decks) => dispatch(receiveDecks(decks)))
    );

    this.setState(() => ({
      title: ""
    }));
  };

  render() {
    const { title } = this.state;

    return (
      <View styles={styles.container}>
        <Text>Add a New Deck</Text>
        <TextInput
          style={styles.titleInput}
          onChangeText={(text) => this.handleTitleInput(text)}
          value={title}
        />
        <Button
          style={styles.submitBtn}
          onPress={this.submit}
          title="ADD NEW DECK"
        />
      </View>
    );
  }
}

const mapStateToProps = (decks) => decks;

export default connect(mapStateToProps)(AddDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white"
  },
  titleInput: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white"
  },
  submitBtn: {
    backgroundColor: "#F0F8FF"
  }
});
