import { View, Text } from 'react-native'
import React from 'react'
import { Styles } from '../../styles/Styles'
import AppBar from '../AppBar'

const Tab2 = (props) => {
    let screenName = "TAB 1"

    return (
        <View style={{justifyContent:'center', alignContent:'center',flex:1,backgroundColor:'white'}} >
        <Text style={{alignSelf:'center',fontSize:20}}>Profile Tab</Text>
        </View>
      )
}

export default Tab2