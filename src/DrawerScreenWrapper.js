import { View, Text, StyleSheet } from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { useDrawerProgress, getDrawerStatusFromState } from '@react-navigation/drawer'
import React, { useRef, useEffect, useState } from 'react';

const DrawerScreenWrapper = ({ children, props }) => {

    const progress = useDrawerProgress()
    const navigation = props.navigation
    const [drawerOpen, setDrawerOpen] = useState(false)

    const animateStyles = useAnimatedStyle(() => ({

        transform: [
            // {scale :interpolate(progress.value,[0,1],[1,1])},
            { translateY: interpolate(progress.value, [0, 1], [0, 40]) },
            { perspective: 1000 },
            { rotate: '-10deg' },
            { translateX: interpolate(progress.value, [0, 1], [0, 60]) },

        ]
    }));
    const animateStyles0 = useAnimatedStyle(() => ({
        transform: [
            { scale: interpolate(progress.value, [0, 1], [1, 1]) },
        ]
    }));


    useEffect(() => {
        const _unsubscribe = navigation.addListener('state', () => {

            const isDrawerOpen =
                getDrawerStatusFromState(navigation.getState()) === 'open';

            if (isDrawerOpen) {
                setDrawerOpen(false)
            } else {
                setDrawerOpen(true)
            }

        });

        return () => {
            _unsubscribe()
        };

    }, []);


    return (
        <Animated.View style={[styles.container, drawerOpen ? animateStyles0 : animateStyles]}>
            {children}
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    screen: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#fff',
    },
    drawer: {
        flex: 1,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default DrawerScreenWrapper