import React from 'react';
import {View, Text, Image, Button} from 'react-native';
//style
import styles from './Detail.style';

const Detail = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.image}} />
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Button title={'BUY'} />
    </View>
  );
};
export default Detail;
