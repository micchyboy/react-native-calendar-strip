import React, { Component } from 'react';
 
import {
  Animated,
  PanResponder
} from 'react-native';

export default class DraggableView extends React.Component {
   static propTypes = {
      onSwipeLeft: React.PropTypes.func,
      onSwipeRight: React.PropTypes.func
    }

   constructor(props) {
     super(props);
     this.state = {
       pan: new Animated.ValueXY(), // inits to zero
     };
     this.state.panResponder = PanResponder.create({
       onStartShouldSetPanResponder: () => true,
       onPanResponderMove: Animated.event([null, {
         dx: this.state.pan.x
       }]),
       onPanResponderRelease: () => {
         if(this.state.pan.x._value < -30) {
            this.props.onSwipeLeft()
         } 
         else if(this.state.pan.x._value > 30) {
            this.props.onSwipeRight()
         }  
         Animated.spring(
           this.state.pan,         // Auto-multiplexed
           {toValue: {x: 0}} // Back to zero
         ).start();
       },
       onMoveShouldSetPanResponder: () => {
          return true;
        }
     });
   }
   render() {
     return (
       <Animated.View
         {...this.state.panResponder.panHandlers}
         style={this.state.pan.getLayout()}>
         {this.props.children}
       </Animated.View>
     );
   }
 }