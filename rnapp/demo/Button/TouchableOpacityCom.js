import React, { Component } from 'react';
import { TouchableOpacity , View , StyleSheet , Text } from 'react-native';

class TouchableOpacityCom extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
         }
    }
    render() { 
        let { data } = this.state;
        return ( 
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{
                        fetch('https://facebook.github.io/react-native/movies.json')
                        .then((res) => res.json())
                        .then((resJson)=>{
                            this.setState({
                                data:resJson.movies
                            })
                        })
                        .catch((err)=>{
                            alert(`${err}`)
                        })
                    }}
                >   
                    <Text
                        style={styles.countText}
                    >{data.length ? data[0].title : 'touch me'}</Text>
                </TouchableOpacity>
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
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    },
    countText: {
      color: '#f0f0f0',
      fontSize:50,
      textAlign:'center'
    }
  })
export default TouchableOpacityCom;