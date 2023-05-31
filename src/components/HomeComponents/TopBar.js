import * as React from "react";
import { Button } from "react-native";
import { Image, StatusBar, TouchableOpacity, View } from "react-native";
//import ImagePicker from "react-native-image-crop-picker";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styles from "./HomeComponents.style";

const TopBar = () => {
  const navigation = createNativeStackNavigator();

  const openCamera = React.useCallback(async () => {
    await ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    });
  }, []);

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor="black" />

      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/images/instagram_text_logo.png")}
          style={styles.icon}
        />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => openCamera()}>
          <FontAwesome name="plus-square-o" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
