import React from "react";
import { View, TouchableOpacity, ToastAndroid } from "react-native";
import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { GET_ARTICLE } from "../context/article/ArticleReducer";
import { useTheme } from "../context/theme/ThemeProvider";

const Navbar = ({ navigation }) => {
  const iconSize = 22;

  const [themeState, themeDispatch] = useTheme();
  const { theme } = themeState;

  return (
    <View
      style={tw` absolute w-full z-10 bottom-0 ${theme.bg} border-t-2 border-${theme.inverted} py-2 flex-row items-center px-4 w-full`}
    >
      <View style={tw`flex-1 justify-start`}>
        <View style={tw`items-start`}>
          <TouchableOpacity
            style={tw`p-2`}
            onPress={() => navigation.toggleDrawer()}
          >
            <AntDesign name="menu-fold" size={24} color={theme.inverted} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={tw`flex-1 flex-row justify-center`}>
        <TouchableOpacity
          style={tw`p-2 border-2 border-${theme.inverted}  rounded-2xl`}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: "HomeStack",
                  params: {
                    action: GET_ARTICLE,
                  },
                },
              ],
            })
          }
        >
          <Entypo name="shuffle" size={24} color={theme.inverted} />
        </TouchableOpacity>
      </View>

      <View style={tw`flex-1 flex-row justify-end`}>
        <TouchableOpacity
          style={tw`p-2`}
          onPress={() => ToastAndroid.show("TO DO: Love ", ToastAndroid.SHORT)}
        >
          <AntDesign name="hearto" size={iconSize} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`p-2`}
          onPress={() => ToastAndroid.show("TO DO: Share ", ToastAndroid.SHORT)}
        >
          <AntDesign name="sharealt" size={iconSize} color={theme.inverted} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
