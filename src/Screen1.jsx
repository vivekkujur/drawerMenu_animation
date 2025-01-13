import { View, Text, Pressable, StyleSheet,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import DrawerScreenWrapper from './DrawerScreenWrapper'
import AppBar from './AppBar'
import { Styles } from '../styles/Styles'
import TabsNavigator from './tabs/TabsNavigator'
import { getBatteryModule1 } from './BatteryModule'
import { FlatList } from 'react-native-gesture-handler'


const Screen1 = (props) => {
    let screenName = "SHOP"
    const [battery, setBattery] = useState("0%")
    const [dataList, setDataList] = useState([])
    const [skip, setSkip] = useState(0)
    const limit = 30

    const getApiData = () => {
        fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`).then((data) => data.json()).then(s => {
            let data = s.products
            let newData = [...dataList, ...data]
            setDataList(newData)
        }
        )
    }

    useEffect(() => {
        getApiData()
    }, [skip])

    const handleEndReach = () => {
        setSkip((prevSkip) => prevSkip + limit)
    }

    useEffect(() => {
        let battery1 = getBatteryModule1()
        console.log(battery1)

    }, [])


    return (
        <DrawerScreenWrapper props={props}>
            <View style={Styles.screenViewStyles}>
                <AppBar title={screenName} navigation={props.navigation} />
                {/* <TabsNavigator/> */}
                <Pressable
                    style={{ padding: 20, backgroundColor: "#e0e0e0", borderRadius: 10, marginTop: 20, elevation: 20 }}>
                    <Text>
                        Native Module
                    </Text>
                    <Text style={{ color: "blue" }}>
                        Get Mobile Battery Percentage :   {battery}
                    </Text>
                </Pressable>

                <View>
                <Text style={style.titleTxt2}>Products:</Text>
                </View>

                <FlatList data={dataList}
                    renderItem={({ item }) =>
                        <View
                            style={{ margin: 10, backgroundColor: '#e0e0e0', borderRadius: 10, padding: 12, justifyContent: 'center', alignContent: 'center' }}>
                        
                            <Image  style={{alignSelf:'center'}}source={{uri:item.thumbnail}} height={100} width={100}/>
                            <Text style={style.titleTxt}> {item.title.toString()}</Text>
                            <Text style={{marginTop:8}}> $ {item.price.toString()}</Text>
                            <Text style={{marginTop:8}}> {item.description.toString()}</Text>
                        </View>

                    }
                    keyExtractor={item => item.id}
                    onEndReached={handleEndReach}
                    onEndReachedThreshold={0.5} />
            </View>
        </DrawerScreenWrapper >
    )
}


const style = StyleSheet.create({

    titleTxt: {
        fontSize:18,
        color:'black',
        fontWeight:'600'
    },
    titleTxt2: {
        fontSize:20,
        color:'black',
        fontWeight:'600',
        marginVertical:10
    }
})
export default Screen1