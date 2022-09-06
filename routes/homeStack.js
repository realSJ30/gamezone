import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import React from "react";
import Header from "../shared/header";
import { Image } from "react-native";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "#444",        
        headerStyle: { backgroundColor: "#eee", height: 80 },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation})=>{
          return {
            headerTitle: () => <Header navigation={navigation} title='GameZone'/>,
            headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{height: '98%'}}/>,            
          }
        }}
      />
      <Stack.Screen
        name="Review Details"
        component={ReviewDetails}
        options={{
          title: "Game Review Details",
        }}
      />
    </Stack.Navigator>
  );
}
