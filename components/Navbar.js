import React from "react";
import { View, TouchableOpacity, ToastAndroid } from "react-native";
import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { GET_ARTICLE } from "../context/article/ArticleReducer";

const Navbar = ({ navigation }) => {
  const iconSize = 24;

  return (
    <View
      style={tw` absolute w-full z-10 bottom-0 bg-white border-t-2 border-black py-2 flex-row items-center px-4 w-full`}
    >
      <View style={tw`flex-1 justify-start`}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <AntDesign name="menu-fold" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={tw`flex-1 flex-row justify-center`}>
        <TouchableOpacity
          style={tw`p-2 border-2 border-black rounded-2xl`}
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
          <Entypo name="shuffle" size={26} color="black" />
        </TouchableOpacity>
      </View>

      <View style={tw`flex-1 flex-row justify-end`}>
        <TouchableOpacity
          style={tw`px-2`}
          onPress={() => ToastAndroid.show("TO DO: Love ", ToastAndroid.SHORT)}
        >
          <AntDesign name="hearto" size={iconSize} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`px-2`}
          onPress={() => ToastAndroid.show("TO DO: Share ", ToastAndroid.SHORT)}
        >
          <AntDesign name="sharealt" size={iconSize} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
