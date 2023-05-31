import React, { useRef } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import transitions from "@material-ui/core/styles/transitions";
import BottomSheet from "react-native-gesture-bottom-sheet";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Container from "../../components/Container/Container";
import SearchBar from "../../components/SearchBar/SearchBar";
import store from "../../storage/database/store";

import styles from "./Store.style";
// import Details from "./Details";

const { width } = Dimensions.get("window");

const TopLabel = () => {
  const bottomSheet = useRef();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Shop on Vennverse</Text>
      </View>
      <View style={styles.right}>
        <Image source={require("../../../assets/images/calendar.png")} />

        <BottomSheet
          hasDraggableIcon
          ref={bottomSheet}
          height={250}
          sheetBackgroundColor="#262626"
        >
          <View style={{ backgroundColor: "black", flex: 1, marginTop: 10 }}>
            <Text style={styles.labelText}>Your Shopping cart</Text>
            <View style={styles.containerText}>
              <Ionicons name="notifications-outline" size={24} color="white" />
              <TouchableOpacity>
                <Text style={styles.text2}>Notifications</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
            <Text style={styles.labelText}>View cart</Text>
            <Text style={styles.labelText}>CheckOut</Text>
          </View>
        </BottomSheet>

        <TouchableOpacity onPress={() => bottomSheet.current.show()}>
          <FontAwesome name="bars" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Store = () => {
  const navigation = useNavigation();
  // const onPress = () => {
  //   return (
  //     //<Details />
  //     // <View>
  //     //   <text>Details for the product</text>
  //     //   <text>Costs : 100 dollars</text>
  //     //   <text>Shipping charges 10 dollars</text>
  //     // </View>
  //   );
  // };
  return (
    <Container insets={{ top: true }}>
      <TopLabel />
      <SearchBar placeHolders={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {store.map((data, index) => {
              return (
                <View>
                  {/* <TouchableOpacity onPress={onPress}> */}
                  <TouchableOpacity 
                    key={index}
                    onPress={ () =>{
                      navigation.navigate({
                        name: "Item",
                        params: {
                          image: data.image,
                          name: data.name,
                          pp: data.image,
                          timeStory: data.timeStory,
                        },
                      })
                    }}
                  >
                      <View>
                        <Image
                        style={{
                          height: 180,
                          width: width * 0.5,
                          resizeMode: "cover",
                          borderWidth: 1,
                          borderColor: "black",
                        }}
                        source={data.image}
                      />
                      </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Store;