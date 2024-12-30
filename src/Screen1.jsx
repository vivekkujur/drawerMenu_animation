import { View, Text } from 'react-native'
import React from 'react'
import DrawerScreenWrapper from './DrawerScreenWrapper'
import AppBar from './AppBar'
import { Styles } from '../styles/Styles'
import TabsNavigator from './tabs/TabsNavigator'

const Screen1 = (props) => {
    let screenName = "START"

    return (
        <DrawerScreenWrapper props={props}>
            <View style={Styles.screenViewStyles}>
               <AppBar title={screenName} navigation={props.navigation} />
               <TabsNavigator/>

            </View>
         </DrawerScreenWrapper >
    )
}

export default Screen1