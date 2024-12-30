import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerScreenWrapper from './DrawerScreenWrapper'
import AppBar from './AppBar'
import { Styles } from '../styles/Styles'

const Screen4 = (props) => {
    let screenName = "ORDERS"

    return (
      <DrawerScreenWrapper props={props}>
            <View style={Styles.screenViewStyles}>
            <AppBar title={screenName} navigation={props.navigation}/>
              </View>
  </DrawerScreenWrapper>
    )
}

export default Screen4

const styles = StyleSheet.create({})