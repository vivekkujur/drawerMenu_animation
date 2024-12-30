import { View, Text } from 'react-native'
import React from 'react'
import DrawerScreenWrapper from './DrawerScreenWrapper'
import AppBar from './AppBar'

const Screen1 = (props) => {
    let screenName = "START"

    return (
        <DrawerScreenWrapper>
            <View style={{ backgroundColor: 'white', flex: 1 ,borderTopLeftRadius:30, padding:20,marginTop:20,marginLeft:20}}>
               <AppBar title={screenName} navigation={props.navigation} />
            </View>
        </DrawerScreenWrapper>
    )
}

export default Screen1