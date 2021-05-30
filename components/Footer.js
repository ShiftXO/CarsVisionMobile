import React from "react";
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Footer, Text, Content, Form } from 'native-base';
import { useNavigation } from "@react-navigation/core";
import { blue, white } from '../assets/colors';
function FooterTab() {
    const navigation = useNavigation();

    return (
        <Footer style={styles.footerContainer}>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
        </Footer>
    );

}

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: '#e5e5e5',
        height: 65,
        alignItems: 'center'
    },
    button: {
        width: 150,
        height: 55,
        padding: 10,
        margin: 10,
        backgroundColor: blue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: white
    }
});

export default FooterTab;