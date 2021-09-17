import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import BtnBack from "../../components/BtnBack";
import { useTheme } from "../../context/theme/ThemeProvider";

const About = ({ navigation }) => {

  const [themeState, themeDispatch] = useTheme()
  const {theme} = themeState

  return (
    <View style={tw`${theme.bg} h-full`}>
      <BtnBack navigation={navigation} />

      <Text style={tw`text-${theme.secondary} text-center text-lg p-6`}>ABOUT</Text>
      <Text style={tw`${theme.textColor} px-8 py-2 text-lg`}>
      DailyMyth has as scope the fight of misinformation of any kind (from stereotypes to conspiracy theories) in any scientific discipline's field (from history to medicine and health).{`\n`}{`\n`}It does so by providing the user with a new myth/fact every day and explaining why it is false/true.{`\n`}These articles will be written by experts of the sector or by associations that face misinformation every day.{`\n`}{`\n`}A link to the source, with a brief description of it, will always be displayed.
      </Text>
    </View>
  );
};

export default About;
