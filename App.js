import React from "react";
import { SafeAreaView, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import MenuDrawer from "./routes/drawer/MenuDrawer";
import { ArticleProvider } from "./context/article/ArticleProvider";

const App = () => {
  return (
    <ArticleProvider>
      <NavigationContainer>
        <SafeAreaView
          style={{
            flex: 1,
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          }}
        >
          <MenuDrawer />
        </SafeAreaView>
      </NavigationContainer>
    </ArticleProvider>
  );
};

export default App;
