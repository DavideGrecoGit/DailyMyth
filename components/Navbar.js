import React from "react";
import { View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Navbar = ({ navigation }) => {
  return (
    <View
      style={tw` absolute w-full z-10 bottom-0 bg-white border-2 border-black py-2 flex-row justify-evenly items-center`}
    >
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <AntDesign name="menu-fold" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Loading")}>
        <Entypo name="shuffle" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
