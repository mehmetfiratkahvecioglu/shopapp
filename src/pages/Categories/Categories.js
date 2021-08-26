import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
//components
import CategoryCard from '../../components/CategoryCard';

const Categories = ({navigation}) => {
  const [data, setData] = useState(null);

  const fetchData = () => {
    axios.get('https://fakestoreapi.com/products/categories').then(response => {
      setData(response.data).catch(error => {
        console.log(error);
      });
    });
  };

  const handleSelect = item => {
    navigation.navigate('Products', {item});
  };

  const renderCategories = ({item}) => {
    return <CategoryCard products={item} onSelect={() => handleSelect(item)} />;
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderCategories} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ff6d00'},
});
export default Categories;
