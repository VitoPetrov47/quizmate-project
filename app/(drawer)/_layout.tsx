import SidebarContent from "@/components/Navigation/Sidebar/SidebarContent";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { useTheme } from "react-native-paper";

export default function DrawerLayout() {
  const theme = useTheme();

  return (
    <Drawer
      drawerContent={(props) => <SidebarContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: theme.colors.primary,
      }}
    />
  );
}
