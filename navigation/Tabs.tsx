import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Tv from "../screens/Tv";
import { Ionicons } from "@expo/vector-icons";
import { BLACK_COLOR, DARK_GREY, WHITE, YELLOW_COLOR } from "../colors";
import { useColorScheme } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? BLACK_COLOR : "white",
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: BLACK_COLOR,
        },
        tabBarActiveTintColor: YELLOW_COLOR,
        tabBarInactiveTintColor: DARK_GREY,
        headerStyle: {
          backgroundColor: BLACK_COLOR,
        },
        headerTitleStyle: {
          color: WHITE,
        },
        tabBarlabelStyle: {
          marginTop: -5,
          fontSize: 10,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name='Movies'
        component={Movies}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"film-outline"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='TV'
        component={Tv}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='tv-outline' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"search-outline"} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
