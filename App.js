import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
//import Base from './Base';
import Btw from './Btw'
import Check from './Check';
import Login from './Login';


const AppStackNavigator = createStackNavigator({
  Login,
  Check,
  //Base,
  Btw
  
}, {
defaultNavigationOptions :{
  headerStyle:{
    backgroundColor :"orange"
  }
}

}

);



export default createAppContainer(AppStackNavigator);
