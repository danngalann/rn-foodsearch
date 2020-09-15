import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Result = ({ result, location }) => {
  
  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  // Calculate distance in a straight line from user's location to restaurant coordinates
  const computeDistance = (lat1, lon1, lat2, lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  };

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
      <Text style={styles.info}>
        {rating} stars, {review_count} reviews
      </Text>
      {/* <Text>At {computeDistance(result.latitude, result.logitude, location.latitude, location.longitude)}km (aprox)</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
  },
  name: {
    fontSize: 15,
  },
  info: {
    fontSize: 11,
  },
});

export default Result;
