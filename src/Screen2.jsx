import { View, Text } from 'react-native'
import React from 'react'
import DrawerScreenWrapper from './DrawerScreenWrapper'
import AppBar from './AppBar'
import { Styles } from '../styles/Styles'

const Screen2 = (props) => {
    let screenName = "YOUR CART"

  return (
    <DrawerScreenWrapper  props={props}>
            <View style={Styles.screenViewStyles}>
            <AppBar title={screenName} navigation={props.navigation}/>
            </View>
</DrawerScreenWrapper>
  )
}

export default Screen2