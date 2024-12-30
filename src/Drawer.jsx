import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import { Text, Image, Pressable, StyleSheet, TouchableOpacity, useAnimatedValue, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
// import { Animated } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import screen3 from './screen3';
import Screen4 from './Screen4';
import Screen3 from './screen3';

const Drawer = createDrawerNavigator()

const DrawerContent = (props) => {
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

            <Pressable style={[styles.drawerBtnStyle, { marginTop: 30 }]}

                onPress={() => { props.navigation.navigate(Screen1, props) }}>
                <View >
                    <Text style={styles.drawerLblStyle}>
                        Start
                    </Text>
                </View>
            </Pressable>
            <Pressable style={styles.drawerBtnStyle}
                onPress={() => props.navigation.navigate(Screen2, props)}>

                <View >
                    <Text style={styles.drawerLblStyle}>
                        Your Cart
                    </Text>
                </View>
            </Pressable>
            <Pressable style={styles.drawerBtnStyle}
                onPress={() => props.navigation.navigate(Screen3, props)}>


                <View >
                    <Text style={styles.drawerLblStyle}>
                        Favourites
                    </Text>
                </View>
            </Pressable>
            <Pressable style={styles.drawerBtnStyle}
                onPress={() => props.navigation.navigate(Screen4, props)}>


                <View >
                    <Text style={styles.drawerLblStyle}>
                        Your Orders
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
        , marginLeft: 20
    }

})