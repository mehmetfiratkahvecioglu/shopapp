import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//style
import styles from './CategoryCard.style';

const CategoryCard = ({products, onSelect}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {products[0].toUpperCase() + products.substring(1)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
