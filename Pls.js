import React from 'react';
import {  Text, View, Image , Button ,StyleSheet , FlatList } from 'react-native';
import Swiper from 'react-native-swiper';

const rows = [
  {id: 0, text: 'Client 1'},
  {id: 1, text: 'Client 2'},
  {id: 2, text: 'Client 3'},
  {id: 3, text: 'Client 4'},
  {id: 4, text: 'Client 5'},
]

const extractKey = ({id}) => id



export default class Main extends React.Component {
  renderItem = ({item}) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }
 render() {
     return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Processing</Text>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Button title="Uber"/>
            <Button title="Tek"/>
            <Button title="Food"/>
          </View>
          <Text style={styles.text}>Here is supposed to be the Map</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Completed</Text>
          <View >
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Button title="Uber"/>
              <Button title="Tek"/>
              <Button title="Food"/>
            </View>
            <FlatList
             style={styles.container}
              data={rows}
              renderItem={this.renderItem}
              keyExtractor={extractKey}
            />
            
          </View>
        </View>
        
      </Swiper>
     );
  
 }
}
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFDEAD',
  },
  slide2: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFDEAD',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})