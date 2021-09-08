import React from "react";
import { View, Text, ToastAndroid } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import tw from "tailwind-react-native-classnames";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export function DrawerContent(props) {
  const iconSize = 24;
  const iconColor = "black";

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          icon={() => (
            <AntDesign name="home" size={iconSize} color={iconColor} />
          )}
          label="Today"
          onPress={() =>
            props.navigation.navigate("HomeStack", { url: "URL TODAY" })
          }
        />
        <DrawerItem
          icon={() => (
            <AntDesign name="search1" size={iconSize} color={iconColor} />
          )}
          label="Search"
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
          onPress={() => props.navigation.navigate("Themes")}
        />
        <DrawerItem
          icon={() => <Entypo name="info" size={iconSize} color={iconColor} />}
          label="About"
          onPress={() => props.navigation.navigate("About")}
        />
        <DrawerItem
          icon={() => (
            <AntDesign name="setting" size={iconSize} color={iconColor} />
          )}
          label="Settings"
          onPress={() => props.navigation.navigate("Settings")}
        />
      </DrawerContentScrollView>

      <DrawerItem
        icon={() => (
          <AntDesign name="logout" size={iconSize} color={iconColor} />
        )}
        label="Sign Out"
        onPress={() =>
          ToastAndroid.show("TO DO: Sign Out ", ToastAndroid.SHORT)
        }
      />
    </View>
  );
}
