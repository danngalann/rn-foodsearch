import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [doSearch, results, location] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => doSearch(term)}
      />
      <ScrollView>
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
    </>
  );
};

const styles = StyleSheet.create();

export default SearchScreen;
