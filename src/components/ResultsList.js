import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Result from './Result';

const ResultsList = ({ header, results, location }) => {
  return (
    <View>
      <Text style={styles.header}>{header}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Result result={item} location={location} />
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
    marginBottom: 3
  },
});

export default ResultsList;
