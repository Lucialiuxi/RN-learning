/**
 * React Native 中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点
 */

import React, { Component } from 'react';
import {  View } from 'react-native';
export default class FlexDimensionsBasics extends Component {
    render() {
      return (
        // 试试去掉父View中的`flex: 1`。
        // 则父View不再具有尺寸，因此子组件也无法再撑开。
        // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
        <View
          style={{ 
            flex: 1, 
            flexDirection: 'column',
            justifyContent:'space-between',
            alignItems:'stretch'
          }}
        >
          {/* <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 2, backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, backgroundColor: 'steelblue'}} />*/}
          {/* <View style={{ height: 50, width: 50, backgroundColor: 'powderblue' }} /> */}
          <View style={{ height: 50,  backgroundColor: 'powderblue' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'skyblue' }} />
          <View style={{ height: 50, width: 50, backgroundColor: 'steelblue' }} />
        </View>
      );
    }
  }