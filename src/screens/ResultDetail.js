import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import MapView, {Marker} from "react-native-maps";

import yelp from "../api/yelp";

const ResultDetail = ({ navigation }) => {
  const id = navigation.getParam("id");

  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>{result.name}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: result.coordinates.latitude,
            longitude: result.coordinates.longitude,
            latitudeDelta: 0.0022,
            longitudeDelta: 0.0021,
          }}
        >
          <Marker coordinate={result.coordinates} title={result.name} />
        </MapView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  image: { height: 200, width: 300 },
  map: {
    width: 400,
    height: 200,
  },
});

export default ResultDetail;
