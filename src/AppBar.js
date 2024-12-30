import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const AppBar = ({title,navigation}) => {
  return (
    <View style={{flexDirection:'row'}}>
        <Pressable 
        onPress={()=> navigation.openDrawer()
        }
        >
      <View >
        <Image source={require('../assets/menu1.png')  } style={{height:24, width:24}}/>
      
      </View>
      </Pressable>
      <View style={{paddingHorizontal:10}}>
      <Text style={{fontSize:24, color:"#a2a2a9",letterSpacing:2}}> {title}</Text>

      </View>
    </View>
  )
}

export default AppBar