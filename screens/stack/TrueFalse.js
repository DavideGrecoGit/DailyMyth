import React, { useEffect } from "react";
import { Button, View, Text, Alert, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";

import Navbar from "../../components/Navbar";
import { useArticle } from "../../context/article/ArticleProvider";
import { useTheme } from "../../context/theme/ThemeProvider";

import { AntDesign } from "@expo/vector-icons";

const TrueFalse = ({ navigation }) => {
  const [articleState, articleDispatch] = useArticle();
  const { article, error, errorMessage } = articleState;

  const [themeState, themeDispatch] = useTheme();
  const { theme } = themeState;

  if (error) {
    Alert.alert("Ops!", `${errorMessage}\nTry Again!`, [
      { text: "Okay", style: "cancel", onPress: () => {} },
    ]);
  }

  const iconSize = 48;

  return (
    <View style={tw` bg-${theme?.primary}  h-full p-8`}>
      <Text style={tw`${theme?.textColor} text-center text-2xl p-2`}>
        {article?.title}
      </Text>

      <View>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
          }}
          keyExtractor={(item) => item}
          horizontal
          data={article?.tags}
          renderItem={({ item }) => (
            <Text
              style={tw`${theme?.textColor} text-center text-lg italic font-bold p-2`}
            >
              {item}
            </Text>
          )}
        />
      </View>

      <Text
        style={tw`text-${theme?.secondary} italic text-center text-lg mt-8 p-4`}
      >
        Choose the correct one!
      </Text>
      <View style={tw`flex-row justify-around`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CheckAnswer", { answer: true })}
        >
          <AntDesign
            style={tw`bg-white rounded-full p-1`}
            name="checkcircle"
            size={iconSize}
            color="green"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("CheckAnswer", { answer: false })}
        >
          <AntDesign
            style={tw`bg-white rounded-full p-1`}
            name="closecircle"
            size={iconSize}
            color="red"
          />
        </TouchableOpacity>
      </View>

      {/* <Navbar navigation={navigation} /> */}
    </View>
  );
};

export default TrueFalse;
