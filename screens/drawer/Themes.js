import React, { useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";

import BtnBack from "../../components/BtnBack";
import { useTheme } from "../../context/theme/ThemeProvider";
import { setTheme } from "../../context/theme/ThemeAction";

import { light, dark } from "../../context/theme/themes";
import { TouchableOpacity } from "react-native-gesture-handler";

const Themes = ({ navigation }) => {
  const [theme, themeDispatch] = useTheme();

  const themeButtons = [
    {
      key: "light",
      label: "Light theme",
      labelStyle: tw`bg-white border-black text-center border-2 p-2 text-lg w-40`,
      onPress: () => {
        // console.log(light);
        setTheme(themeDispatch, light);
      },
    },
    {
      key: "dark",
      label: "Dark theme",
      labelStyle: tw`bg-gray-800 text-white text-center  p-2 text-lg w-40`,
      onPress: () => {
        // console.log(dark);
        setTheme(themeDispatch, dark);
      },
    },
  ];

  return (
    <View style={tw`bg-white h-full`}>
      <BtnBack navigation={navigation} />
      <Text style={tw`text-center p-8`}>Themes Page</Text>
      <FlatList
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
        }}
        data={themeButtons}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={item.onPress} style={tw`m-2`}>
            <Text style={item.labelStyle}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Themes;
