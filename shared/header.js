import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation,title}){

    const openMenu = ()=>{
        navigation.openDrawer();
    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name="menu" size={24} color="black" style={styles.iconStyle} onPress={openMenu} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle:{
        flexDirection: 'row',                
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    iconStyle:{
        position: 'absolute',
        left: 1,
    },
    headerImage:{
        width: 26,
        height: 26,   
        marginHorizontal: 8,     

    }
})