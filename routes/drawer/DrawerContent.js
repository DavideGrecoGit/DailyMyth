import React from "react";
import { View, Text, ToastAndroid } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import tw from "tailwind-react-native-classnames";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { GET_LATEST_ARTICLE } from "../../context/article/ArticleReducer";
import { useTheme } from "../../context/theme/ThemeProvider";

export function DrawerContent(props) {
  const [themeState, themeDispatch] = useTheme();
  const { theme } = themeState;

  const iconSize = 24;
  const iconColor = theme.inverted;
  const labelStyle = tw`${theme.textColor} text-base`;

  return (
    <View style={tw`${theme.bg} flex-1`}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          icon={() => (
            <AntDesign name="home" size={iconSize} color={iconColor} />
          )}
          label="Today"
          labelStyle={labelStyle}
          onPress={() =>
            props.navigation.navigate("HomeStack", {
              action: GET_LATEST_ARTICLE,
            })
          }
        />
        <DrawerItem
          icon={() => (
            <AntDesign name="search1" size={iconSize} color={iconColor} />
          )}
          label="Search"
          labelStyle={labelStyle}
          onPress={() => {
            props.navigation.navigate("Search");
          }}
        />
        <DrawerItem
          icon={() => (
            <MaterialCommunityIcons
              name="creation"
              size={iconSize}
              color={"orange"}
            />
          )}
          label="Themes"
          labelStyle={labelStyle}
          onPress={() => props.navigation.navigate("Themes")}
        />
        <DrawerItem
          icon={() => <Entypo name="info" size={iconSize} color={iconColor} />}
          label="About"
          labelStyle={labelStyle}
          onPress={() => props.navigation.navigate("About")}
        />
        <DrawerItem
          icon={() => (
            <AntDesign name="setting" size={iconSize} color={iconColor} />
          )}
          label="Settings"
          labelStyle={labelStyle}
          onPress={() => props.navigation.navigate("Settings")}
        />
      </DrawerContentScrollView>

      <DrawerItem
        icon={() => (
          <AntDesign name="logout" size={iconSize} color={iconColor} />
        )}
        style={tw`border-t-2 border-${theme.inverted}`}
        label="Sign Out"
        labelStyle={labelStyle}
        onPress={() =>
          ToastAndroid.show("TO DO: Sign Out ", ToastAndroid.SHORT)
        }
      />
    </View>
  );
}
