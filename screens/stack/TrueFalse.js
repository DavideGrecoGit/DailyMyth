import React from "react";
import { Button, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

import Navbar from "../../components/Navbar";
import { useArticle } from "../../context/ArticleState";

const TrueFalse = ({ navigation }) => {
  const [articleState, articleDispatch] = useArticle();
  const { article } = articleState;

  return (
    <View style={tw`bg-red-500 h-full`}>
      <Text style={tw`text-center p-8`}>TrueFalse</Text>
      <Text style={tw`text-center p-8`}>{article}</Text>
      <Button
        title="Answer"
        onPress={() => navigation.navigate("CheckAnswer")}
      />
      <Navbar navigation={navigation} />
    </View>
  );
};

export default TrueFalse;
