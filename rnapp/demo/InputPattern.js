import React, { Component } from 'react';
import {  Text, TextInput, View } from 'react-native';

export default class InputPattern extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={() => this.setState({text:'已经提交了'})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {/* {this.state.text.split(' ').map((word) => word && '🍕').join(' ')} */}
          {this.state.text}
        </Text>
      </View>
    );
  }
}