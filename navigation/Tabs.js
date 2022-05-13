import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Tv from "../screens/Tv";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: {
        backgroundColor: "red",
      },
    }}
  >
    <Tab.Screen name='Movies' component={Movies} />
    <Tab.Screen
      name='Tv'
      component={Tv}
      options={{
        tabBarLabelStyle: {
          backgroundColor: "purple",
        },
      }}
    />
    <Tab.Screen name='Search' component={Search} />
  </Tab.Navigator>
);

export default Tabs;
