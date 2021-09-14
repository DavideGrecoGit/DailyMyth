import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import TrueFalse from "../screens/stack/TrueFalse";
import CheckAnswer from "../screens/stack/CheckAnswer";
import Article from "../screens/stack/Article";

import { useArticle } from "../context/article/ArticleProvider";
import {
  getLatestArticle,
  getRandomArticle,
  setArticleLoading,
} from "../context/article/ArticleAction";
import {
  GET_ARTICLE,
  GET_LATEST_ARTICLE,
} from "../context/article/ArticleReducer";

const Stack = createStackNavigator();

const HomeStack = ({ navigation, route }) => {
  const action = route.params?.action;

  const [articleState, articleDispatch] = useArticle();
  const { latestArticle, articleLoading } = articleState;

  const getLatestArticleHandler = async () => {
    await getLatestArticle(articleDispatch, latestArticle);
    setArticleLoading(articleDispatch, false);
  };

  const getRandomArticleHandler = async () => {
    await getRandomArticle(articleDispatch);
    setArticleLoading(articleDispatch, false);
  };

  useEffect(() => {
    if (action === GET_LATEST_ARTICLE) {
      console.log("Fetching latest article");
      getLatestArticleHandler();
    }

    if (action === GET_ARTICLE) {
      console.log("Fetching random article");
      getRandomArticleHandler();
    }
  }, [action]);

  if (articleLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName="TrueFalse"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TrueFalse" component={TrueFalse} />
      <Stack.Screen name="CheckAnswer" component={CheckAnswer} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};

export default HomeStack;
