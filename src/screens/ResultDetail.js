import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";

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
      <Text>{result.name}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <ScrollView showsVerticalScrollIndicator={false}>
              <Image style={styles.image} source={{ uri: item }} />
            </ScrollView>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {},
  image: { height: 200, width: 300 },
});

export default ResultDetail;
