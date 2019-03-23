import React from 'react';
import {CheckBox , Text, View, Button} from 'react-native';


export default class Btw extends  React.Component{
    constructor(props) {
        super(props);
       this.state={
       }
    }
    
   
    
    render() {
        const o =this.props.navigation.getParam ('o')
        const u =this.props.navigation.getParam ('u')
        const t =this.props.navigation.getParam ('t')
        return (
            <View >
               <Text>{o}</Text>
               <Text>{u}</Text>
               <Text>{t}</Text>
               <Button onPress={()=>this.props.navigation.navigate('Check')} title='o'/>
            </View>);
    }

} 