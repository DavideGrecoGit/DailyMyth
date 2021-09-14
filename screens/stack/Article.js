import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";

import Navbar from "../../components/Navbar";

import { useArticle } from "../../context/article/ArticleProvider";
import { useTheme } from "../../context/theme/ThemeProvider";

const Article = ({ navigation }) => {
  const [articleState, articleDispatch] = useArticle();
  const { article, error, errorMessage } = articleState;

  const [themeState, themeDispatch] = useTheme();
  const { theme } = themeState;

  return (
    <View style={tw`${theme.bg} h-full`}>
      <ScrollView style={tw`px-6`}>
        <View style={tw`border-b-2 border-${theme.secondary} pb-4 pt-6`}>
          <Text style={tw`text-${theme.secondary} text-center italic pb-4`}>
            Today's
          </Text>

          <Text style={tw`${theme.textColor} text-center text-xl pb-4`}>
            {article?.title}
          </Text>

          <View>
            <FlatList
              horizontal
              contentContainerStyle={{
                flex: 1,
                justifyContent: "center",
              }}
              data={article?.tags}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Text style={tw`${theme.textColor} font-bold mx-2`}>
                  #{item}
                </Text>
              )}
            />
          </View>
        </View>

        <Text style={tw`${theme.textColor} text-left text-lg pt-4`}>
          {article?.body}
        </Text>

        <Text style={tw`text-center text-lg p-2 text-${theme.secondary}`}>
          Source
        </Text>

        <Text style={tw`${theme.textColor} text-left text-base italic mb-20`}>
          {article?.source}
        </Text>
      </ScrollView>

      <Navbar navigation={navigation} />
    </View>
  );
};

export default Article;
