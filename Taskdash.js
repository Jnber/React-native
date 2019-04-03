import React from 'react';
import {  Text, View, Image , Button  } from 'react-native';


class Task_Dash extends React.Component {
   state={
     num:1,
     time:'13:00',
     cate:'Uber'
   }
  render() {
      return (
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'}}>
          <Text >#Client {this.state.num} </Text>
          <Text/><Text/><Text/><Text/>
          <Button title="Accept" style={{width:5}}/>
        </View>
        <View>
          <Text>{this.state.time}</Text>
          <Text/><Text/><Text/>
          <Text>{this.state.cate}</Text>
          <Button title='Fournisseur'/>
        </View>
      </View>
      );
   
  }
}


export default class Main extends React.Component {
  
 render() {
     return (
      <View>
        <Task_Dash/>
        <Task_Dash/>
        <Task_Dash/>
      </View>
     );
  
 }
}
