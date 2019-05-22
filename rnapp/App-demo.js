import React, { Component } from 'react';
import { Text, View , ScrollView } from 'react-native';
import LotsOfGreetings from './demo/LotsOfGreetings';
import BlinkApp from './demo/BlinkApp';
import LotsOfStyles from './demo/LotsOfStyles';
import FlexDimensionsBasics from './demo/FlexDimensionsBasics';
import InputPattern from './demo/InputPattern';
import TouchableHighlightCom from './demo/Button/TouchableHighlightCom';
import TouchableNativeFeedbackCom from './demo/Button/TouchableNativeFeedbackCom';
import TouchableOpacityCom from './demo/Button/TouchableOpacityCom';
import TouchableWithoutFeedbackCom from './demo/Button/TouchableWithoutFeedbackCom';
import FlatListCom from './demo/FlatListCom';
import SectionListCom from './demo/SectionListCom';
import FetchFlatList from './demo/FetchFlatList';

export default class HelloWorldApp extends Component {
  render() {
    return (
      // <ScrollView >
      //   <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
      //     <View
      //       style={{
      //         flex:1,
      //         justifyContent:'flex-start',
      //         backgroundColor:'#67C23A'
      //       }}
      //     >
      //       <TouchableHighlightCom/>
      //       <TouchableNativeFeedbackCom/>
      //       <TouchableOpacityCom/>
      //       <TouchableWithoutFeedbackCom/>
      //     </View>
      //   </View>
      //   <BlinkApp/> 
      //   <LotsOfGreetings/>
      //   <LotsOfStyles/>
      //   <InputPattern/>
      //   <FlexDimensionsBasics/> 
      //   <FlatListCom/>
      //   <SectionListCom/>
      // </ScrollView>
      <FetchFlatList/>
    );
  }
}

