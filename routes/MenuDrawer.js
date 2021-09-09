import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContent } from "./DrawerContent";
import { GET_LATEST_ARTICLE } from "../context/ArticleReducer";

import HomeStack from "./HomeStack";
import Settings from "../screens/drawer/Settings";
import Themes from "../screens/drawer/Themes";
import About from "../screens/drawer/About";
import Search from "../screens/drawer/Search";

const MenuDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        initialParams={{ action: GET_LATEST_ARTICLE }}
      />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="Themes" component={Themes} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default MenuDrawer;
