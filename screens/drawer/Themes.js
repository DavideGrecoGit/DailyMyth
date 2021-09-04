import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

import BtnBack from "../../components/BtnBack";

const Themes = ({ navigation }) => {
  return (
    <View style={tw`bg-gray-500 h-full`}>
      <BtnBack navigation={navigation} />
      <Text style={tw`text-center p-8`}>Themes Page</Text>
    </View>
  );
};

export default Themes;
