import { View, Text } from 'react-native'
import React from 'react'
import { Styles } from '../../styles/Styles'
import AppBar from '../AppBar'

const Tab1 = (props) => {
    let screenName = "TAB 1"
    console.log(props)

  return (
    <View style={{justifyContent:'center', alignContent:'center',flex:1,backgroundColor:'white'}} >
        <Text style={{alignSelf:'center',fontSize:20}}>Home Tab</Text>
        </View>
  )
}

export default Tab1