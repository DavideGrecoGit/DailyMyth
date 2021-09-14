import React from "react";
import { SafeAreaView, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import MenuDrawer from "./routes/drawer/MenuDrawer";
import { ArticleProvider } from "./context/article/ArticleProvider";
import { ThemeProvider } from "./context/theme/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <ArticleProvider>
        <NavigationContainer>
          <SafeAreaView
            style={{
              flex: 1,
              paddingTop:
                Platform.OS === "android" ? StatusBar.currentHeight : 0,
            }}
          >
            <MenuDrawer />
          </SafeAreaView>
        </NavigationContainer>
      </ArticleProvider>
    </ThemeProvider>
  );
};

export default App;
