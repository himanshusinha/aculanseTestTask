import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});

export default styles;
