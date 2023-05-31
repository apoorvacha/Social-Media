import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import send from '../../storage/database/message';
import data from '../../storage/database/post';

import styles from './HomeComponents.style';

const NewsPost = () => {
  const [like, setLike] = useState([]);
  const bottomSheet = useRef();

  const checkLike = React.useCallback((currentLike, postName) => {
    return currentLike.find(item => item === postName);
  }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={item.image} style={styles.sheetImage} />
          <View>
            <Text style={styles.sheetLabel}>{item.user}</Text>
            <Text style={{color: '#a2a2a2'}}>{item.username}</Text>
          </View>
        </View>
      </View>
    );
  };
  const handleFlowPress = React.useCallback(
    postName => {
      setLike(currentFollow => {
        const isFollowed = checkLike(currentFollow, postName);

        if (isFollowed) {
          return currentFollow.filter(item => item !== postName);
        }

        return [...currentFollow, postName];
      });
    },
    [checkLike],
  );
  const navigation = useNavigation();
  return (
    <View style={styles.line}>
      {data.map((data, index) => {
        return (
          <View key={index} style={{marginBottom: 10}}>
            <View style={{height: 400}}>
              <Image source={data.postImage} style={styles.ımage} />
            </View>

            <View style={styles.ıconContainer}>
              <View style={styles.leftIcon}>
                <TouchableOpacity
                  onPress={() => handleFlowPress(data.postName)}>
                  <AntDesign
                    name={checkLike(like, data.postName) ? 'heart' : 'hearto'}
                    size={24}
                    color={checkLike(like, data.postName) ? 'red' : 'white'}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate({
                      name: 'ReadMore',
                      params: {
                        image: data.postImage,
                        user: data.postName,
                        explanation: data.explanation,
                        news: data.news
                      },
                    })
                  }>
                  <MaterialIcons name="read-more" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => bottomSheet.current.show()}>
                  <Feather name="send" size={24} color="white" />
                </TouchableOpacity>
              </View>
              <BottomSheet
                hasDraggableIcon
                ref={bottomSheet}
                height={400}
                sheetBackgroundColor="#262626">
                <View>
                  <View>
                    <TextInput
                      placeholder="Ara"
                      placeholderTextColor={'#a7a7a7'}
                      style={styles.input}
                    />
                    <Feather
                      name="search"
                      size={20}
                      color={'#4d4d4d'}
                      style={{
                        position: 'absolute',
                        margin: 15,
                        paddingLeft: 10,
                      }}
                    />
                  </View>
                  <View>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          style={styles.sheetImage}
                          source={require('../../../assets/images/profil.jpg')}
                        />
                        <Text style={styles.sheetLabel}>
                          Lily
                        </Text>
                      </View>
                      <View style={{justifyContent: 'center'}}>
                        <AntDesign
                          name="right"
                          size={18}
                          color="#a4a4a4"
                          style={{
                            margin: 10,
                            alignItems: 'center',
                            marginRight: 20,
                          }}
                        />
                      </View>
                    </View>
                  </View>
                  <View>
                    <FlatList
                      data={send}
                      keyExtractor={item => item.id}
                      renderItem={renderItem}
                    />
                  </View>
                </View>
              </BottomSheet>
            </View>

            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={styles.newsPost}>{data.newsPost}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default NewsPost;
