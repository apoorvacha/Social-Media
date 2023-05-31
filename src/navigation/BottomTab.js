import React from "react";
import { Image } from "react-native";
import { Avatar } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import News from "../views/News/News";
import AccountScreen from "./AccountScreen";
import HomeScreen from "./HomeScreen";
import StoreScreen from "./StoreScreen";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "HomeScreen") {
            return focused ? (
              <Foundation name="home" size={32} color="white" />
            ) : (
              <Image
                source={require("../../assets/images/home.png")}
                style={{ width: 25, height: 25 }}
              />
            );
          }

          if (route.name === "News") {
            return <Entypo name="news" size={28} color="white" />;
          }

          if (route.name === "StoreScreen") {
            return <Feather name="shopping-bag" size={28} color="white" />;
          }
          if (route.name === "AccountScreen") {
            return (
              <Avatar.Image
                size={28}
                source={require("../../assets/images/profil.jpg")}
              />
            );
          }
        },
        tabBarStyle: { backgroundColor: "black" },
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="StoreScreen" component={StoreScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
};
export default BottomTab;
