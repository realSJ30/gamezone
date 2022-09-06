import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";
import React from "react";
import DummyStack from "./DummyStack";
const RootDrawerNavigator = createDrawerNavigator();

export default function Drawer() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator.Navigator>
        <RootDrawerNavigator.Screen name="HomeStack" component={HomeStack} />
        <RootDrawerNavigator.Screen name="AboutStack" component={AboutStack} />
        <RootDrawerNavigator.Screen name="DummyStack" component={DummyStack} />
      </RootDrawerNavigator.Navigator>
    </NavigationContainer>
  );
}
