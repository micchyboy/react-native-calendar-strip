import React, { Component } from 'react';
 
import {
  Animated,
  PanResponder,
  Dimensions,
  View
} from 'react-native';

const { width, height } = Dimensions.get('window')

export default class DraggableView extends React.Component {
   static propTypes = {
      onSwipeLeft: React.PropTypes.func,
      onSwipeRight: React.PropTypes.func
    }

   constructor(props) {
     super(props);
     this.state = {
       pan: new Animated.ValueXY(),
       fadeAnim: new Animated.ValueXY({x: 0, y: 0})
     };
     this.state.panResponder = PanResponder.create({
       onStartShouldSetPanResponder: () => true,
       onPanResponderMove: Animated.event([null, {
         dx: this.state.pan.x
       }]),
       onPanResponderRelease: () => {
        //this.resetAnimation()
         if(this.state.pan.x._value < -30) {
            this.props.onSwipeLeft()
            this.resetAnimation('left')
         } 
         else if(this.state.pan.x._value > 30) {
            this.props.onSwipeRight()
            this.resetAnimation('right')
         }  
         Animated.spring(
           this.state.pan,         // Auto-multiplexed
           {toValue: {x: 0}} // Back to zero
         ).start();
       },
       onMoveShouldSetPanResponder: (evt, gestureState) => {
        if(gestureState.dx < -5 || gestureState.dx > 5) {
          return true;
        }
        else {
          return false;
        }
        }
     });
   }

   resetAnimation(origin) {
        this.setState({fadeAnim: new Animated.ValueXY({x: origin === 'left' ? width : -width, y: 0})},
          this.triggerSlideIn)
    }

   componentDidMount() {
        this.triggerSlideIn()
    }

    triggerSlideIn(){
      Animated.timing(       // Uses easing functions
        this.state.fadeAnim, // The value to drive
        {
          toValue: {x: 0, y: 0},        // Target
          duration: 200,    // Configuration
        },
      ).start();  
    }
   render() {
     return (
       <Animated.View
         {...this.state.panResponder.panHandlers}
         style={this.state.pan.getLayout()}>
         <Animated.View style={{transform: this.state.fadeAnim.getTranslateTransform()}} >
          <View>
            {this.props.children}
          </View>
          </Animated.View>
       </Animated.View>
     );
   }
 }