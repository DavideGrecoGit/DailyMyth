import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Loading from "../screens/stack/Loading";
import TrueFalse from "../screens/stack/TrueFalse";
import CheckAnswer from "../screens/stack/CheckAnswer";
import Article from "../screens/stack/Article";

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="TrueFalse" component={TrueFalse} />
      <Stack.Screen name="CheckAnswer" component={CheckAnswer} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};

export default HomeStack;
