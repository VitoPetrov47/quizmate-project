import AccordionMenu from "@/components/ui/AccordionMenu";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import React from "react";
import { Platform, StyleSheet, UIManager, View } from "react-native";
import { Avatar, Divider, Text } from "react-native-paper";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function SidebarContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Avatar.Image size={70} source={{ uri: "https://i.pravatar.cc/300" }} />
        <Text variant="titleMedium" style={{ marginTop: 10 }}>John Doe</Text>
      </View>

      <Divider />

      <AccordionMenu/>

      <Divider />

      <DrawerItem label="Main Page" onPress={() => props.navigation.navigate("(drawer)/main")} />
      <DrawerItem label="Settings" onPress={() => props.navigation.navigate("(drawer)/settings")} />
      <Divider />
      <DrawerItem
        label="Close Menu"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: { padding: 20, alignItems: "center" },
});
