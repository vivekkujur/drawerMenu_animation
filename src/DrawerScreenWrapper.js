import { View, Text, StyleSheet } from 'react-native'
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated'
import { useDrawerProgress } from '@react-navigation/drawer'
import React, { useRef, useEffect } from 'react';

const DrawerScreenWrapper = ({children}) => {

    const progress=  useDrawerProgress()
    // const tiltAnim = useRef(new Animated.Value(0)).current;

//   const rotateInterpolation = rotate : interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '-10deg'], // Tilt downward
//   });

//   const scaleInterpolation = tiltAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: [1, 0.9], // Slightly shrink the screen
//   });
    const animateStyles= useAnimatedStyle(()=>(
        {
            transform:[
                // {scale :interpolate(progress.value,[0,1],[1,1])},
                { translateY: interpolate(progress.value,[0, 1],[0, 20])},
                { perspective: 1000 },
                { rotate: '-10deg' },
                { translateX: interpolate(progress.value,[0, 1],[0, 60] ) },

            ],

            // transform: [
            //     { perspective: 1000 },
            //     { rotate: rotateInterpolation },
            //     { scale: scaleInterpolation },
            //     { translateX: tiltAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 30] }) },
            //   ],
            //   transformOrigin: 'top right', // Set transform origin for the fixed corner effect
            
        }
    ))


//   useEffect(() => {
    // const unsubscribe = navigation.addListener('drawerOpen', () => {
    //   Animated.timing(tiltAnim, {
    //     toValue: 1,
    //     duration: 500,
    //     useNativeDriver: true,
    //   }).start();
    // });

    // const closeDrawer = navigation.addListener('drawerClose', () => {
    //   Animated.timing(tiltAnim, {
    //     toValue: 0,
    //     duration: 500,
    //     useNativeDriver: true,
    //   }).start();
    // });

    // return () => {
    //   unsubscribe();
    //   closeDrawer();
    // };
//     Animated.timing(progress, {
//         toValue: 0,
//         duration: 500,
//         useNativeDriver: true,
//       }).start();
//   }, [ ]);

//   const rotateInterpolation = tiltAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '-10deg'], // Tilt downward
//   });

//   const scaleInterpolation = tiltAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: [1, 0.9], // Slightly shrink the screen
//   });

//   const animatedStyle = {
//     transform: [
//       { perspective: 1000 },
//       { rotate: rotateInterpolation },
//       { scale: scaleInterpolation },
//       { translateX: tiltAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 30] }) },
//     ],
//     transformOrigin: 'top right', // Set transform origin for the fixed corner effect
//   };

  return (
    <Animated.View style={[styles.container,animateStyles]}>
      {children}
    </Animated.View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    screen: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 20,
        color: '#fff',
      },
      drawer: {
        flex: 1,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
      },
})

export default DrawerScreenWrapper