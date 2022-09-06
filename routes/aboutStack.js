import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";
import Header from "../shared/header";
import React from "react";

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
        initialRouteName="About"
        screenOptions={{
          headerTintColor: "#444",
          headerStyle: { backgroundColor: "#eee", height: 80 },
        }}
      >
        <Stack.Screen
          name="About"
          component={About}
          options={({navigation})=>{
            return {
              headerTitle: () => <Header navigation={navigation} title='About Us'/>,
            }
          }}
        />
      
      </Stack.Navigator>
  );
}
