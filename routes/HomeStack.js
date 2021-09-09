import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import TrueFalse from "../screens/stack/TrueFalse";
import CheckAnswer from "../screens/stack/CheckAnswer";
import Article from "../screens/stack/Article";

import { useArticle } from "../context/ArticleState";
import {
  getLatestArticle,
  getRandomArticle,
  setLoading,
} from "../context/ArticleAction";
import { GET_ARTICLE, GET_LATEST_ARTICLE } from "../context/ArticleReducer";
import Navbar from "../components/Navbar";

const HomeStack = ({ navigation, route }) => {
  const action = route.params.action;

  const [articleState, articleDispatch] = useArticle();
  const { latestArticle, loading } = articleState;

  const getLatestArticleHandler = async () => {
    await getLatestArticle(articleDispatch, latestArticle);
    setLoading(articleDispatch, false);
  };

  const getRandomArticleHandler = async () => {
    await getRandomArticle(articleDispatch);
    setLoading(articleDispatch, false);
  };

  useEffect(() => {
    if (action === GET_LATEST_ARTICLE) {
      getLatestArticleHandler();
    }

    if (action === GET_ARTICLE) {
      getRandomArticleHandler();
    }
  }, [action]);

  if (loading) {
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

  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="TrueFalse">
        <Stack.Screen name="TrueFalse" component={TrueFalse} />
        <Stack.Screen name="CheckAnswer" component={CheckAnswer} />
        <Stack.Screen name="Article" component={Article} />
      </Stack.Navigator>
      {/* <Navbar navigation={navigation} /> */}
    </>
  );
};

export default HomeStack;
