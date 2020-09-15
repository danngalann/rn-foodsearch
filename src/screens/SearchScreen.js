import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import SearchBar from "../components/SearchBar";

import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  // Get list of businesses
  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term,
          limit: 50,
          location: "barcelona",
        },
      });
      setResults(response.data.businesses);
      setTerm("");
    } catch (e) {
      Alert.alert(`Something went wrong.`);
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>{JSON.stringify(results[0])}</Text>
    </View>
  );
};

const styles = StyleSheet.create();

export default SearchScreen;
