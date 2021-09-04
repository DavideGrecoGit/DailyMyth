import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

import BtnBack from "../../components/BtnBack";

const Settings = ({ navigation }) => {
  return (
    <View style={tw`bg-blue-500 h-full`}>
      <BtnBack navigation={navigation} />
      <Text style={tw`text-center p-8`}>Settings Page</Text>
    </View>
  );
};

export default Settings;
