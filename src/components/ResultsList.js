import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Result from "./Result";

import {withNavigation} from 'react-navigation'

const ResultsList = ({ header, results, location, navigation }) => {

  if(!results.length) {
    return null;
  }

  return (
    <View>
      <Text style={styles.header}>{header}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsDetail', {id: item.id})}>
              <Result result={item} location={location} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 3,
  },
});

export default withNavigation(ResultsList);
