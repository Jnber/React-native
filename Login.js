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

export default class Login extends React.Component{
 componentDidMount (){
    firebase.database().ref('login').on('value', (snapshot)=>{
      this.setState(  
      {email:snapshot.val().email, pass:snapshot.val().pass}

)
    })
 }
 state={
   email:'',
   pass:'',
   a1:'',
   a2:''
 }

 verif(){
   if (this.state.email != this.state.a1 || this.state.pass != this.state.a2 )
   {
     alert('too bad')
   }
 }
 render (){
   return(
    <View>
      <TextInput  onChangeText={(text)=>this.setState({a1:text})}/>
      <TextInput  onChangeText={(text)=>this.setState({a2:text})}/>
      <Button title='verif' onPress={()=>this.verif()}/>
    </View>
   );
 }

} 

