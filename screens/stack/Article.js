import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

import Navbar from "../../components/Navbar";

const Article = ({ navigation }) => {
  return (
    <View style={tw`bg-blue-500 h-full`}>
      <Text style={tw`text-center p-8`}>Article Page</Text>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Article;
