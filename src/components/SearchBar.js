import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Picker } from "@react-native-community/picker";

import { Feather } from "@expo/vector-icons";

const SearchBar = ({
  term,
  onTermChange,
  onTermSubmit,
  radius,
  onRadiusChange,
}) => {
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
      <Picker
        selectedValue={radius}
        style={{ height: 50, width: 105 }}
        onValueChange={(itemValue) => onRadiusChange(itemValue)}
      >
        <Picker.Item label="2km" value="2000" />
        <Picker.Item label="5km" value="5000" />
        <Picker.Item label="10km" value="10000" />
        <Picker.Item label="20km" value="20000" />
        <Picker.Item label="40km" value="40000" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    marginHorizontal: 25,
    marginTop: 15,
    marginBottom: 15,
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
