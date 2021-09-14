import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, ActivityIndicator, Text } from "react-native";

import { DrawerContent } from "./DrawerContent";
import { GET_LATEST_ARTICLE } from "../../context/article/ArticleReducer";

import HomeStack from "../HomeStack";
import Settings from "../../screens/drawer/Settings";
import Themes from "../../screens/drawer/Themes";
import About from "../../screens/drawer/About";
import Search from "../../screens/drawer/Search";

import {
  getDefaultTheme,
  setThemeLoading,
} from "../../context/theme/ThemeAction";
import { useTheme } from "../../context/theme/ThemeProvider";
import { getLatestArticle } from "../../context/article/ArticleAction";
import { useArticle } from "../../context/article/ArticleProvider";

const Drawer = createDrawerNavigator();

const MenuDrawer = () => {
  const [themeState, themeDispatch] = useTheme();
  const [articleState, articleDispatch] = useArticle();

  const [loading, setLoading] = useState(true);

  const getDefaultThemeHandler = async () => {
    console.log("Fetching theme");

    await getDefaultTheme(themeDispatch);
    setThemeLoading(themeDispatch, false);
  };

  const getLatestArticleHandler = async () => {
    console.log("Fetching latest article");

    await getLatestArticle(articleDispatch, null);
    setThemeLoading(articleDispatch, false);
  };

  const handleLoadingData = async () => {
    await getDefaultThemeHandler();
    await getLatestArticleHandler();
    console.log("Loading complete");

    setLoading(false);
  };

  useEffect(() => {
    handleLoadingData();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#ff0000" />
      </View>
    );
  }

  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="Themes" component={Themes} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default MenuDrawer;
