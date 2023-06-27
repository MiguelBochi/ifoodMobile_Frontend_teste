import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>IFood</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#332E30",
    padding: 20,
    marginTop: 30,
    width: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },
});
