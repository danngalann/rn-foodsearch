import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [doSearch, results] = useResults();

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
      {/* <Text>{JSON.stringify(results[0])}</Text> */}
      <ScrollView>
        <ResultsList
          header="Cost effective"
          results={filterResultsByPrice("€")}
        />
        <ResultsList header="Pricier" results={filterResultsByPrice("€€")} />
        <ResultsList header="Expender" results={filterResultsByPrice("€€€")} />
        <ResultsList header="Rich ass motherfucker" results={filterResultsByPrice("€€€€")} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create();

export default SearchScreen;
