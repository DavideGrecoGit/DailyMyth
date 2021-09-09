import React from "react";
import { SafeAreaView, Platform, StatusBar } from "react-native";
import tw from "tailwind-react-native-classnames";
import { NavigationContainer } from "@react-navigation/native";

import MenuDrawer from "./routes/MenuDrawer";
import { ArticleState } from "./context/ArticleState";

const App = () => {
  return (
    <ArticleState>
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
    </ArticleState>
  );
};

export default App;
