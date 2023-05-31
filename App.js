import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/navigation/HomeScreen";
import BottomTab from "./src/navigation/BottomTab";
import MessageScreen from "./src/navigation/MessageScreen";
import EditProfile from "./src/navigation/EditProfile";
import Comment from "./src/views/Comment/Comment";
import Story from "./src/views/Story/Story";
import Item from "./src/views/Item/Item";
import ReadMore from "./src/views/ReadMore/ReadMore";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Login" component={Login} /> */}

      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Comment" component={Comment} />
      <Stack.Screen name="ReadMore" component={ReadMore} />
      <Stack.Screen
        name="Story"
        component={Story}
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="Item"
        component={Item}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
