import { useState, useEffect } from "react";
import yelp from "../api/yelp";
import * as Location from "expo-location";
import { Alert } from "react-native";

export default () => {
  const [results, setResults] = useState([]);
  const [location, setLocation] = useState([]);

  // Get list of businesses
  const searchApi = async (term, radius, location) => {
    // Sanitize radius
    radius = radius == undefined ? 2000 : radius;
    radius =  typeof radius  == 'string' ? Number(radius) : radius;

    try {
      const { latitude, longitude } = location.coords;
      const response = await yelp.get("/search", {
        params: {
          term,
          radius,
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
  const doSearch = (term, radius) => {
    if (typeof term != "string") {
      term = "";
    }
    getLocation(location => searchApi(term, radius, location));
  };

  useEffect(() => {
    doSearch();
  }, []);

  return [doSearch, results, location];
};
