import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import PDFScreen from "./pdfscreen";

export default function About(){
    return(
        <View style={globalStyles.container}>
            <PDFScreen/>
        </View>
    )
}

