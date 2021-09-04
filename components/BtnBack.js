import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

import { AntDesign } from "@expo/vector-icons";

const BtnBack = ({ navigation }) => {
  return (
    <View style={tw`items-center m-4`}>
      <TouchableOpacity
        style={tw`absolute z-10 top-0 left-0 p-2 bg-white rounded-xl`}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="back" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default BtnBack;
