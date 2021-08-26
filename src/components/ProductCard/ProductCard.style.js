import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1, borderWidth: 4, margin: 10, borderRadius: 15},
  titleContainer: {
    backgroundColor: 'orange',
    borderTopWidth: 4,
    padding: 4,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {fontSize: 20, fontWeight: 'bold', color: 'white'},
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
