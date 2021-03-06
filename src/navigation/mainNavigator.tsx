import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { Component } from "react";
import Game from "../screens/game";
import Settings from "../screens/settings";

const Tab = createBottomTabNavigator();

//Bottom Tabs with the changing colors and switching between pages

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: React.ComponentProps<typeof Ionicons>[] =
            "game-controller";

          if (route.name === "Game") {
            iconName = focused ? "game-controller" : "game-controller-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Game" component={Game} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
