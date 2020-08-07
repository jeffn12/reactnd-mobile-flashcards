import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import { View, FlatList, StyleSheet } from "react-native";
import Deck from "./Deck";
// Helpers
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions";
import { TouchableOpacity } from "react-native-gesture-handler";

/**
 * DeckList Component - this is the main view for the app, it will initialize data
 *
 */

export class DeckList extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;

    getDecks().then((decks) => dispatch(receiveDecks(decks)));
  };

  parseArrayData = (decks) => {
    let dataArray = [];
    Object.keys(decks).forEach((deck) => {
      dataArray.unshift(this.props.decks[deck]);
    });
    return dataArray;
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("Deck", {
            deckId: item.title
          });
        }}
      >
        <Deck deckId={item.title} />
      </TouchableOpacity>
    );
  };

  render() {
    const { decks } = this.props;
    return (
      <View style={Styles.container}>
        <FlatList
          data={this.parseArrayData(decks)}
          keyExtractor={(item) => item.title}
          renderItem={this.renderItem}
          extraData={true}
        ></FlatList>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, { navigation }) => {
  return {
    decks,
    navigation
  };
};

export default connect(mapStateToProps)(DeckList);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start"
  }
});
