import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import TrueFalse from "../screens/stack/TrueFalse";
import CheckAnswer from "../screens/stack/CheckAnswer";
import Article from "../screens/stack/Article";

const HomeStack = ({ route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [lastArticle, setLastArticle] = useState(null);
  const [article, setArticle] = useState(null);

  const { url } = route.params;
  const [message, setMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);

    if (url === "URL TODAY") {
      setMessage("Loading TODAY's Article");

      setTimeout(() => {
        setLastArticle({ title: "TODAY'S ARTICLE" });
        setArticle(lastArticle);
        setIsLoading(false);
      }, 500);
    }

    if (url === "URL SHUFFLE") {
      setMessage("Loading a RANDOM Article");

      setTimeout(() => {
        setArticle({ title: "RANDOM ARTICLE" });
        setIsLoading(false);
      }, 500);
    }
  }, [url]);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{message}</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="TrueFalse">
      <Stack.Screen name="TrueFalse" component={TrueFalse} />
      <Stack.Screen name="CheckAnswer" component={CheckAnswer} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};

export default HomeStack;
