import React, { Component } from 'react';
import { TouchableWithoutFeedback , View , StyleSheet , Text , Alert } from 'react-native';
/**
 * 注意TouchableWithoutFeedback只支持一个子节点（不能没有子节点也不能多于一个）。如果你希望包含多个子组件，可以用一个View来包装它们。
 */
class TouchableWithoutFeedbackCom extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.container}>
                <TouchableWithoutFeedback 
                    style={styles.button}
                    onPress={()=>{
                        Alert.alert('I am TouchableWithoutFeedback Component')
                    }}
                    // disabled={true}--没有生效
                >   
                    <Text
                        style={styles.countText}
                    >touch me</Text>
                </TouchableWithoutFeedback>
            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    button: {
      alignItems: 'center',
    //   backgroundColor: 'pink',
    //   padding: 50,
      flex: 1,
    //   borderRadius:25,
    //   overflow:'hidden'
    },
    countText: {
      color: '#FF00FF',
      backgroundColor: 'pink',
      padding: 50,
      borderRadius:25,
    }
  })
export default TouchableWithoutFeedbackCom;