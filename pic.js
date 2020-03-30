import React, { Component } from 'react';
import {Image, Text, View,TouchableOpacity } from 'react-native';

export default class HelloWorldApp extends Component {
  constructor() {
    super()
    this.data = []
    this.photo = ['https://www.online-station.net/pic/X2NvbnRlbnQvMjAxOS8wNTA5L3RodW1ibmFpbC8xMzM3MDZfMTAwNTQyLmpwZyZ3PTExNDAmaD01OTc','https://i.ytimg.com/vi/5AkHYp1T1c4/maxresdefault.jpg']
    this.current = 0
  }

  next(){
    this.current++
    if (this.current >= this.photo.length){
      this.current=0
    }
    this.forceUpdate()
  } 
  
   render() {

    return <View> 
    <TouchableOpacity onPress= {()=>this.next()} >
      <Image source={this.photo[this.current]}
              style={{width:200,height:70}}/>
    </TouchableOpacity>

      </View>
  } 
}
