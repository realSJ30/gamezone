import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  

  const [refreshing, setRefreshing] = useState(false);
  

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (true) {
      loadData();
      setRefreshing(false)
    }
    else{
      ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
      setRefreshing(false)
    }
  }, [refreshing]);
  

  const loadData = async () => {
    setRefreshing(true);
    const url = "http://192.168.0.14:8000/api/games";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setreviews(data.reviews);
      setRefreshing(false);
    } catch (error) {
      console.log(error);
    }   
  };

  const storeData = async (review) => {
    const url = "http://192.168.0.14:8000/api/games/store";
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: review.title,
          body: review.body,
          rating: review.rating
        })
      });
      loadData();
      // const data = await response.json();
      // setreviews(data.reviews);
      // setisLoading(false);
    } catch (error) {
      console.log(error);
    }   
  };

  useEffect(() => {
    // setisLoading(true);
    loadData();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setreviews] = useState([
    // { title: "Zelda Breath Air", rating: 5, body: "lorem ipsum", id: "0" },
    // {
    //   title: "Gotta Catch Them All (again)",
    //   rating: 2,
    //   body: "lorem ipsum",
    //   id: "2",
    // },
    // { title: "Not so Final Fantasy", rating: 3, body: "lorem ipsum", id: "3" },
    // { title: "The End Game is Near", rating: 4, body: "lorem ipsum", id: "4" },
  ]);

  const addReview = (review) => {
    storeData(review);
    // review.key = Math.random().toString();
    // setreviews((currentReviews) => {
    //   return [review, ...currentReviews];
    // });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            color="black"
            onPress={() => setModalOpen(false)}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
          />
          <ReviewForm addReview={addReview} />
        </View>
      </Modal>

      <View style={styles.groupButton}>
        <MaterialIcons
          name="add"
          size={24}
          color="black"
          onPress={() => setModalOpen(true)}
          style={styles.modalToggle}
        />
        <MaterialIcons
          name="refresh"
          size={24}
          color="black"
          style={styles.refreshToggle}
          onPress={() => loadData()}
        />
      </View>

      <FlatList
          data={reviews}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Review Details", { item })}
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  groupButton: {
    flexDirection: "row",
    justifyContent: "center",
  },
  refreshToggle: {
    marginLeft: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});
