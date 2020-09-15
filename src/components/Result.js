import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Result = ({ result }) => {
  const { name, image_url, rating, review_count } = result;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            image_url != ""
              ? image_url
              : "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        }}
        style={styles.image}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>{rating} stars, {review_count} reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
  },
  name: {
    fontSize: 15
  },
  info: {
    fontSize: 11
  }
});

export default Result;
