import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";

import BtnBack from "../../components/BtnBack";
import { useTheme } from "../../context/theme/ThemeProvider";
import { setTheme } from "../../context/theme/ThemeAction";

import { light, dark } from "../../context/theme/themes";

const Themes = ({ navigation }) => {
  const [themeState, themeDispatch] = useTheme();
  const { theme, themeId } = themeState;

  const themeButtons = [
    {
      key: "light",
      label: "Light theme",
      labelStyle: tw`bg-white border-black text-center border-2 p-2 text-lg w-40`,
      onPress: (index) => {
        setTheme(themeDispatch, light, index);
      },
    },
    {
      key: "dark",
      label: "Dark theme",
      labelStyle: tw`bg-gray-800 border-white border-2 text-white text-center  p-2 text-lg w-40`,
      onPress: (index) => {
        setTheme(themeDispatch, dark, index);
      },
    },
  ];

  return (
    <View style={tw`${theme.bg} h-full`}>
      <BtnBack navigation={navigation} />
      <Text style={tw`text-${theme.secondary} text-lg text-center p-6`}>
        THEMES
      </Text>
      <FlatList
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
        }}
        data={themeButtons}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => item.onPress(index)}
            style={tw`flex-row items-center m-2 `}
          >
            <AntDesign
              name={index === themeId ? "star" : "staro"}
              style={tw`mr-2 `}
              size={24}
              color="orange"
            />
            <Text style={item.labelStyle}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Themes;
