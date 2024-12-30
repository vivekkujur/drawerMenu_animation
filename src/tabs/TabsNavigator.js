import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../Screen1';
import DrawerScreenWrapper from '../DrawerScreenWrapper';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Icons from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home') {
                    return <Image source={require('../../assets/home.png')} style={{height:20, width:20}}/>;
                } else if (route.name === 'Profile') {
                    return <Image source={require('../../assets/profile.png')} style={{height:20, width:20}}/>;
                }
                return <Image source={require('../../assets/home.png')} style={{height:20, width:20}}/>;
                }

        })}>
            <Tab.Screen name="Home" component={Tab1} />
            <Tab.Screen name="Profile" component={Tab2} />

        </Tab.Navigator>
    );
}

export default TabsNavigator