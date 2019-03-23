import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as  firebase from 'firebase';

const  config = {
  apiKey: "AIzaSyB6llPMHxqIy0kHAziiHUS9qLVRJoQAyF0",
  authDomain: "test-18c37.firebaseapp.com",
  databaseURL: "https://test-18c37.firebaseio.com",
  projectId: "test-18c37",
  storageBucket: "test-18c37.appspot.com",
  messagingSenderId: "635836321879"
};
firebase.initializeApp(config);



export default class Base extends React.Component {
  componentDidMount(){
    // create data
    firebase.database().ref('me1').set({
           d1:'hey',
           d2:'well I tried'
    });
     //get the data
    firebase.database().ref('me1').on('value', (snapshot)=>{
        this.setState ({
            a1:snapshot.val().d1,
        a2:snapshot.val().d2})
 });


  }
  yalla (){

    //change the data        
    firebase.database().ref('me1').set({
     d1:this.state.a1,
     d2:this.state.a2
        });
  }
  state={
      a1:'',
      a2:''
  }
  render() {
    return (
      
      <View >
              <Text>{this.state.a1}, {this.state.a2} anddd I failed</Text>
              <TextInput  onChangeText={(text)=>this.setState({a1:text})}/>
              <TextInput  onChangeText={(text)=>this.setState({a2:text})}/>
              <Button onPress={()=>this.yalla()} title='behy'/>
      </View>
    );
  }
}