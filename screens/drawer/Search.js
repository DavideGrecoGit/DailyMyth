import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import BtnBack from "../../components/BtnBack";

const Search = ({ navigation }) => {
  return (
    <View style={tw`bg-green-500 h-full`}>
      <BtnBack navigation={navigation} />

      <Text style={tw`text-center p-8`}>Search Page</Text>
    </View>
  );
};

export default Search;
