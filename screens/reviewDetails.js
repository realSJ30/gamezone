import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";
export default function ReviewDetails({ route, navigation }) {
  const rating = route.params.item.rating;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{route.params.item.title}</Text>
        <Text>{route.params.item.body}</Text>
        <Text>{rating}</Text>
        <View style={styles.rating}>
          <Text>GameZone ratingss: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  },
});
