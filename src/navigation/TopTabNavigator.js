import React from 'react';
import {Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfilPost from '../views/ProfilPost/ProfilPost';
import Reels from '../views/ProfilReels/ProfilReels';
import Tag from '../views/Tag/Tag';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          if (route.name === 'ProfilPost') {
            return <MaterialCommunityIcons name="grid" size={24} color="white" />;
          }
          if (route.name === 'ProfilReels') {
            return <MaterialIcons name="video-collection" size={24} color="white" />;
          }
          if (route.name === 'Tag') {
            return <MaterialCommunityIcons name="attachment" size={24} color="white"  />;
          }
        },
        tabBarIndicatorStyle: {backgroundColor: 'white', height: 2},
        tabBarLabel: '',
        tabBarStyle: {
          backgroundColor: 'black',
        },
      })}>
      <Tab.Screen name="ProfilPost" component={ProfilPost} />
      <Tab.Screen name="ProfilReels" component={Reels} />
      <Tab.Screen name="Tag" component={Tag} />
    </Tab.Navigator>
  );
};
export default TopTabNavigator;
