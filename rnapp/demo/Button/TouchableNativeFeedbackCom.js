//仅限Android平台
import React, { Component } from 'react';
import { View , Text , TouchableNativeFeedback } from 'react-native';


class TouchableNativeFeedbackCom extends Component {
    render() { 
        return ( 
            <View style={{flex:1 ,justifyContent:'center',alignItems:'center'}}>
                <TouchableNativeFeedback
                    onPress={() => {
                        alert('TouchableNativeFeedback')
                    }}
                     background={TouchableNativeFeedback.SelectableBackground()}
                >
                    <View style={{height:100,width:300,backgroundColor:'red'}}>
                        <Text style={{margin:20,textAlign:'center'}} >Button</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
             );
    }
}
 
export default TouchableNativeFeedbackCom;
