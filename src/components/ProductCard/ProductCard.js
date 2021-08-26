import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './ProductCard.style';
const ProductCard = ({products, onSelect}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: products.image}} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{products.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
