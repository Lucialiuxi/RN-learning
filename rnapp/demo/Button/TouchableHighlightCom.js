import React, { Component } from 'react';
import { View , TouchableHighlight , Text , StyleSheet} from 'react-native';

export default class TouchableHighlightCom extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0,
         }
    }
    render() { 
        return ( 
            <View style={styles.container}>
                <TouchableHighlight
                    activeOpacity={1}//指定封装的视图在被触摸操作激活时以多少不透明度显示（0到1之间，默认值为0.85）
                    onPress={()=>{
                        // Alert.alert('点击图片按钮')
                        let { count } = this.state;
                        count++
                        this.setState({
                            count
                        })

                    }}
                    // style={styles.button}
                >
                    <Text
                      style={styles.countText}
                    >按我能+1</Text>
                </TouchableHighlight> 
                <Text style={styles.countText}>{this.state.count}</Text>
            </View>
        );
    }
}

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    // button: {
    //   alignItems: 'center',
    //   backgroundColor: '#DDDDDD',
    //   padding: 10,
    // },
    countContainer: {
      alignItems: 'center',
      padding: 10
    },
    countText: {
      color: '#FF00FF',
      fontSize:50,
      textAlign:'center'
    }
  })

