import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Search from "../screens/drawer/Search";
import HomeStack from "./stacks/HomeStack";

const SearchStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default SearchStack;
