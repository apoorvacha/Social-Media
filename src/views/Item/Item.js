import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../../components/Container/Container';
import Status from '../../components/Status/Status';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Item.styles';
const Item = ({route}) => {
    
  return (
    <Container insets={{bottom: true}}>
      {/* <Status /> */}
      <View style={styles.top}>
        <Image style={styles.profil} source={route.params.pp} />
        <Text style={styles.user}>{route.params.name}</Text>
        <Text style={styles.time}>{route.params.timeStory}</Text>
      </View>

      <Image style={styles.image} source={route.params.image} />


      <View style={styles.ıconContainer}>
        <View style={styles.leftIcon}>
        <TouchableOpacity>
            <AntDesign name="heart" size={24} color="white"/>
        </TouchableOpacity>
        <TouchableOpacity>
            <AntDesign name="shoppingcart" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
            <Feather name="dollar-sign" size={24} color="white" />
        </TouchableOpacity>
        </View>
        <View style={{marginRight: 20}}>
        <FontAwesome name="bookmark-o" size={24} color="white" />
        </View>
    </View>
    </Container>
  );
};

export default Item;
