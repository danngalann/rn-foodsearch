import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [radius, setRadius] = useState("2000");
  const [doSearch, results, location] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  const updateRadius = (newRadius) => {
    if (newRadius != radius) {
      setRadius(newRadius);
      updateSearch();
    }
  };

  const updateSearch = () => {
    doSearch(term, radius);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={updateSearch}
        radius={radius}
        onRadiusChange={updateRadius}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList
          header="Cost effective"
          results={filterResultsByPrice("€")}
          location={location}
        />
        <ResultsList
          header="Pricier"
          results={filterResultsByPrice("€€")}
          location={location}
        />
        <ResultsList
          header="Expender"
          results={filterResultsByPrice("€€€")}
          location={location}
        />
        <ResultsList
          header="Rich ass motherfucker"
          results={filterResultsByPrice("€€€€")}
          location={location}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default SearchScreen;
