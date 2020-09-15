import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import * as Location from "expo-location";

import SearchBar from "../components/SearchBar";

import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  // Get list of businesses
  const searchApi = async (location) => {
    try {
      const {latitude, longitude} = location.coords;      
      const response = await yelp.get("/search", {
        params: {
          term,
          limit: 50,
          latitude,
          longitude,
        },
      });
      setResults(response.data.businesses);
      setTerm("");
    } catch (e) {
      Alert.alert(`Something went wrong.`);
    }
  };

  // Sets geolocation
  const getLocation = async (callback) => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});

    if (typeof callback == "function") {
      callback(location);
    }
  };

  // Does a search after updating location
  const doSearch = () => {
    getLocation(searchApi);
  };

  useEffect(() => {
    doSearch();
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={doSearch}
      />
      <Text>{JSON.stringify(results[0])}</Text>
    </View>
  );
};

const styles = StyleSheet.create();

export default SearchScreen;
