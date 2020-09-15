import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import useResults from "../hooks/useResults";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [doSearch, results] = useResults();

  const submmit = () => {
    doSearch(term);
    setTerm("");
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={submmit}
      />
      <Text>{JSON.stringify(results[0])}</Text>
    </View>
  );
};

const styles = StyleSheet.create();

export default SearchScreen;
