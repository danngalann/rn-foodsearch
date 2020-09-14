import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    marginHorizontal: 25,
    marginTop: 15,
    borderRadius: 10,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
