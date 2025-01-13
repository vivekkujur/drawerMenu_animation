import {
    createDrawerNavigator
} from '@react-navigation/drawer';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import { Text, Image, Pressable, StyleSheet, TouchableOpacity, useAnimatedValue, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
// import { Animated } from 'react-native';
import Screen4 from './Screen4';
import Screen3 from './screen3';
import { FlatList } from 'react-native-gesture-handler';
import TabsNavigator from './tabs/TabsNavigator';

const Drawer = createDrawerNavigator()

const DrawerContent = (props) => {

    const [selectedButton, setSelectedButton] = useState(null);

    const buttonData = [
        { id: '1', label: 'Shop', screen: Screen1 },
        { id: '2', label: 'Your Cart', screen: Screen2 },
        { id: '3', label: 'Favourites', screen: Screen3 },
        { id: '4', label: 'Your Orders', screen: Screen4 },
    ];

    const handleButtonPress = (id) => {
        setSelectedButton(id);
    };

    const renderButton = ({ item }) => (
        <Pressable style={[styles.drawerBtnStyle, { marginTop: 10 }, selectedButton === item.id && styles.selectedButton]}

            onPress={() => {
                handleButtonPress(item.id)
                props.navigation.navigate(item.screen, props)
            }}>
            <View >
                <Text style={[styles.drawerLblStyle, selectedButton === item.id && styles.selectedButtonTxt]}>
                    {item.label}
                </Text>
            </View>
        </Pressable>
    );

    return (

        <View style={{ flex: 1, paddingTop: 100, justifyContent: 'top', }}>
            <Pressable style={{
                paddingHorizontal: 20, paddingVertical: 10, alignContent: 'center', justifyContent: 'center'
                , marginLeft: 20
            }}>
                <View >
                    <Text style={styles.drawerTitleStyle}>
                        Beka
                    </Text>
                </View>
            </Pressable>

            <View>
                <FlatList
                    data={buttonData}
                    renderItem={renderButton}
                    keyExtractor={(item) => item.id}
                />
            </View>


            <View style={{ height: 1, width: '100%', backgroundColor: 'grey', marginHorizontal: 20, marginTop: 30 }} />

            <Pressable style={[styles.drawerBtnStyle, { marginTop: 10 }]}
            >
                <View >
                    <Text style={[styles.drawerLblStyle, { marginTop: 40 }]}>
                        Sign Out
                    </Text>
                </View>
            </Pressable>



        </View>
    );
};

// selecttio ncolor :43242e
// text select : c4594c

export default () => {

    return (

        <Drawer.Navigator
            drawerType="slide"
            screenOptions={{
                overlayColor: 'transparent',
                drawerStyle: {
                    backgroundColor: '#151031',
                    width: '45%',
                },
                headerShown: false,

                drawerActiveBackgroundColor: "transparent",
                drawerInactiveBackgroundColor: "transparent",
                sceneStyle: { backgroundColor: '#151031' },

            }}

            drawerContent={(props) => <DrawerContent {...props} />}

        >
            <Drawer.Screen name="Screen1" component={Screen1} />
            <Drawer.Screen name="Screen2" component={Screen2} />
            <Drawer.Screen name="Screen3" component={Screen3} />
            <Drawer.Screen name="Screen4" component={Screen4} />
        </Drawer.Navigator>
    );
};


const styles = StyleSheet.create({
    drawerLblStyle: {
        fontWeight: '500',
        fontSize: 20,
        color: 'white',
        alignSelf: 'left'

    },

    drawerTitleStyle: {
        fontWeight: '800',
        fontSize: 30,
        color: 'white',
        alignSelf: 'center'

    },

    drawerBtnStyle: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignContent: 'center',
        justifyContent: 'center'
        , marginLeft: 20,
        borderRadius: 10
    },
    selectedButton: {
        backgroundColor: '#43242e',
    },
    selectedButtonTxt: {
        color: '#c4594c',
    },

})
