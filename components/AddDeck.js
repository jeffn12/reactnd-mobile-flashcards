import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import { StyleSheet, Text, TextInput, View } from "react-native";
// Helpers
import { saveDeckTitle, getDecks } from "../utils/api";
import { receiveDecks } from "../actions";
// Styles
import { blue, white } from "../utils/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export class AddDeck extends Component {
  state = {
    title: ""
  };

  handleTitleInput = (title) => {
    this.setState(() => ({
      title
    }));
  };

  submit = async () => {
    const { dispatch } = this.props;
    const { title } = this.state;
    await saveDeckTitle(title).then(() =>
      getDecks().then((decks) => dispatch(receiveDecks(decks)))
    );

    this.setState(() => ({
      title: ""
    }));

    this.props.navigation.navigate("Deck", { deckId: title });
  };

  render() {
    const { title } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.inputLabel}>New Title:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.handleTitleInput(text)}
          placeholder="My New Deck..."
          value={title}
          returnKeyType="done"
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={this.submit}
          disabled={title === ""}
        >
          <Text style={styles.btnText}>ADD NEW DECK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (decks) => decks;

export default connect(mapStateToProps)(AddDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    height: 40,
    marginTop: 10,
    padding: 5,
    fontSize: 20,
    width: "90%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    shadowColor: "grey",
    shadowRadius: 8,
    shadowOffset: { width: 5, height: 5 },
    backgroundColor: "white"
  },
  inputLabel: {
    alignSelf: "flex-start",
    fontSize: 30,
    marginLeft: 20,
    marginTop: 20
  },
  btn: {
    backgroundColor: blue,
    alignItems: "center",
    margin: 20,
    padding: 15,
    width: 300
  },
  btnText: {
    color: white,
    fontSize: 25
  }
});
