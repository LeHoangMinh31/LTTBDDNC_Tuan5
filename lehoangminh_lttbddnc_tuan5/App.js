import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  StyleSheet,
  Button,
  Linking
} from 'react-native';

const data = [
  {
    id: '1',
    title: 'Mô hình Iron-man 1/12 mk43',
    author: 'MarvelStore',
    uri: require('./assests/ironman.jpg'),
  },
  {
    id: '2',
    title: 'Khô gà lá chanh',
    author: 'Shop ThayGiaoBa',
    uri: require('./assests/khogalachanh.jpg'),
  },
  {
    id: '3',
    title: 'Áo thun nam Adidas Own The Run',
    author: 'Adidas Shop',
    uri: require('./assests/aothun-adidas.jpg'),
  },
  {
    id: '4',
    title: 'Giày Adidas Ultraboost Primeblue Xám',
    author: 'Adidas Shop',
    uri: require('./assests/giay-adidas.jpg'),
  },
];

const App = () => {
  const Item = ({title, author, uri}) => (
    <View style={styles.item}>
      <Image  source={uri} style={styles.img} />
      <View   style={styles.subitem} >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      </View>
      <Button title="Chat" color={'red'}  width={15}/>
    </View>
  );

  const renderItem = ({item}) => (
    <Item title={item.title} author={item.author} uri={item.uri}/>
  );
  return (
    <View style={styles.container}>
      <View>
        <Text>Chat</Text>
      </View>
      <View style={styles.header}>
        <Text>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    backgroundColor: 'grey',
  },
  item: {
    flex: 1, 
   
    flexDirection: 'row',
    justifyContent: 'center',
    padding:10
  },
  subitem: {
    flex:2,  
    flexDirection: 'column'
  },
  btn: {
    width: 10,
    backgroundColor: "oldlace",
  },
  img: {
  
    width: 50,
    height: 50,
  },
});
export default App;
