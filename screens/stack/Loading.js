import React from "react";
import { Button, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

import Navbar from "../../components/Navbar";

const Loading = ({ navigation }) => {
  return (
    <View style={tw`bg-yellow-500 h-full`}>
      <Text style={tw`text-center p-8`}>Loading content</Text>
      <Button
        title="Data fetched"
        onPress={() => navigation.navigate("TrueFalse")}
      />
      <Navbar navigation={navigation} />
    </View>
  );
};
export default Loading;
