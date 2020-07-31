import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

export class Deck extends Component {
  render() {
    return (
      <View>
        <Text> prop </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Deck);
