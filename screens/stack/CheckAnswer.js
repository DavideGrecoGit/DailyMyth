import React from "react";
import { Button, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

import Navbar from "../../components/Navbar";

const CheckAnswer = ({ navigation }) => {
  return (
    <View style={tw`bg-red-500 h-full`}>
      <Text style={tw`text-center p-8`}>Checking answer</Text>
      <Button title="Continue" onPress={() => navigation.navigate("Article")} />
      {/* <Navbar navigation={navigation} /> */}
    </View>
  );
};

export default CheckAnswer;
