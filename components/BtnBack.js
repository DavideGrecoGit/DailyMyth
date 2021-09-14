import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

import { AntDesign } from "@expo/vector-icons";

import { useTheme } from "../context/theme/ThemeProvider";

const BtnBack = ({ navigation }) => {
  const [themeState, themeDispatch] = useTheme();
  const { theme } = themeState;

  return (
    // <View style={tw`items-center m-4`}>
    //   {/* <TouchableOpacity
    //     style={tw`absolute z-10 bottom-0 left-0 p-2 bg-white rounded-xl `}
    //     onPress={() => navigation.toggleDrawer()}
    //   >
    //     <AntDesign name="menu-fold" size={24} color="black" />
    //   </TouchableOpacity> */}

    // </View>
    <TouchableOpacity
      style={tw`absolute z-10 top-4 left-4 p-1 bg-white rounded-xl border-${theme.inverted} border-2`}
      onPress={() => navigation.goBack()}
    >
      <AntDesign name="back" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BtnBack;
