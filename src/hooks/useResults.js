import { useState, useEffect } from "react";
import yelp from "../api/yelp";
import * as Location from "expo-location";
import { Alert } from "react-native";

export default () => {
  const [results, setResults] = useState([]);
  const [location, setLocation] = useState([]);

  // Get list of businesses
  const searchApi = async (term, location) => {
    try {
      const { latitude, longitude } = location.coords;
      const response = await yelp.get("/search", {
        params: {
          term,
          limit: 50,
          latitude,
          longitude,
        },
      });
      setResults(response.data.businesses);
      setLocation(location.coords)
    } catch (e) {
      Alert.alert(`Something went wrong.`);
      console.log(e.message);
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
  const doSearch = (term) => {
    if (typeof term != "string") {
      term = "";
    }
    getLocation(location => searchApi(term, location));
  };

  useEffect(() => {
    doSearch();
  }, []);

  return [doSearch, results, location];
};
