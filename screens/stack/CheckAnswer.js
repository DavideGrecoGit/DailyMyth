import React, { useEffect } from "react";
import { BackHandler, Alert, View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

import { useArticle } from "../../context/article/ArticleProvider";
import { useTheme } from "../../context/theme/ThemeProvider";

const CheckAnswer = ({ navigation, route }) => {
  const { answer } = route.params;

  const [articleState, articleDispatch] = useArticle();
  const { article, error, errorMessage } = articleState;

  const [themeState, themeDispatch] = useTheme();
  const { theme } = themeState;

  useEffect(() => {
    const backAction = () => {
      // If this screen is not focused, don't do anything
      if (!navigation.isFocused()) {
        return false;
      }

      Alert.alert("Hold on!", "Are you sure you want to exit DailyMyth?", [
        {
          text: "Don't leave",
          style: "cancel",

          onPress: () => null,
        },
        { text: "Exit", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <View style={tw`${theme.bg} justify-center items-center h-full px-8 pb-40`}>
      {article?.answer === answer ? (
        <View>
          <Text style={tw`${theme.textColor} text-2xl text-center my-2`}>
            CORRECT!
          </Text>

          <View style={tw`justify-center items-center my-4`}>
            <Text style={tw`${theme.textColor} text-lg `}>
              New theme UNLOCKED!
            </Text>
            <Text style={tw`${theme.textColor} text-lg `}>THEME NAME</Text>
            <TouchableOpacity
              style={tw`${theme.bg} border-2 border-${theme.secondary} p-1 my-4 rounded-xl`}
              onPress={() => navigation.navigate("Themes")}
            >
              <Text style={tw`text-${theme.secondary}`}>Go to themes</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <Text style={tw`${theme.textColor} text-2xl text-center my-2`}>
            WRONG!
          </Text>
          <Text style={tw`${theme.textColor} text-lg text-center my-4`}>
            Get ## correct answers to UNLOCK a new THEME!
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={tw`bg-${theme.secondary} p-2 my-4 rounded-xl`}
        onPress={() => navigation.navigate("Article")}
      >
        <Text style={tw`${theme.textColor} text-xl`}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckAnswer;
