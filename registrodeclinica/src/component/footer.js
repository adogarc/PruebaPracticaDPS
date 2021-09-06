import { RefreshControlBase } from "react-native";
import React from "react";
import{StyleSheet,Text,View,TouchableOpacity} from 'react-native';

export default function Footer(props){
    const{calculate}=props;
    return(
        <View style={styles.viewFooter}>
        <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.text}>CALCULAR</Text>
        </TouchableOpacity>
        </View>
        );
}
const styles = StyleSheet.create({
    viewFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    },
    button: {
        backgroundColor: 'grey',
        padding: 8,
        borderRadius: 20,
        width: '75%',
        },
        text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        },
       });