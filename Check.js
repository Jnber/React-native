import React from 'react';
import {CheckBox , Text, View, Button} from 'react-native';



export default class Check extends  React.Component{
    constructor(props) {
        super(props);
       this.state={
           check:false,
           check1:false,
           check2:false,
           
               food:0,
               Uber:0,
               tek:0,
           
       }
    }
    
   
    checkBoxTest(){
        this.setState({
            check:!this.state.check
           
        })
        if (!this.state.check) 
        this.setState({
            food:1
           
        }); 
            //{alert('Delivery food')}
        else {
            this.setState({
                food:0
               
            }); 
        }
    }

    check1BoxTest(){
        this.setState({
            check1:!this.state.check1
        })
        if (!this.state.check1) 
            
        {
            this.setState({
                Uber:1
               
            });
         }
    else {
        this.setState({
            Uber:0
           
        });
    }
    }
    check2BoxTest(){
        this.setState({
            check2:!this.state.check2
        })
        if (!this.state.check2) 
            
        {this.setState({
            tek:1
           
        }); }
    else {
        this.setState({
            tek:0
           
        });
    }
    }
    render() {
       
        return (
            <View >
               
               <CheckBox value={this.state.check} onChange={()=>this.checkBoxTest()}  />
               <Text>Delivery Food</Text>
               <CheckBox value={this.state.check1} onChange={()=>this.check1BoxTest()}/>
               <Text>Uber</Text>
               <CheckBox value={this.state.check2} onChange={()=>this.check2BoxTest()}/>
               <Text>Delivery tek</Text>
               <Text>{this.state.tableau}</Text>
               <Button onPress={()=>this.props.navigation.navigate('Btw', {o:this.state.food , u:this.state.Uber
            
            , t:this.state.tek})} title='p'/>
            </View>);
    }

} 