import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";
import Header from "../shared/header";
import React from "react";
import Dummy from "../screens/dummy";

const Stack = createStackNavigator();

export default function DummyStack() {
  return (
    <Stack.Navigator
        initialRouteName="Dummy"
        screenOptions={{
          headerTintColor: "#444",
          headerStyle: { backgroundColor: "#eee", height: 80 },
        }}
      >
        <Stack.Screen
          name="Dummy"
          component={Dummy}
          options={({navigation})=>{
            return {
              headerTitle: () => <Header navigation={navigation} title='Dummy'/>,
            }
          }}
        />
      
      </Stack.Navigator>
  );
}
