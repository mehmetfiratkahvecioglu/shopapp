import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
//comps
import ProductCard from '../../components/ProductCard';

const Products = ({route, navigation}) => {
  const {item} = route.params;

  const [data, setData] = useState(null);

  const fetchData = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        const newData = response.data.filter(value => value.category === item);
        setData(newData);
      })
      .catch();
  };

  const handleSelect = item => {
    navigation.navigate('Detail', {item});
  };

  const renderProducts = ({item}) => {
    return <ProductCard products={item} onSelect={() => handleSelect(item)} />;
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});

export default Products;
