import React, { Component } from 'react';
import { Image, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { ListItem, Text, Left, Right, Grid, Row, Col } from 'native-base';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Body, Picker } from 'native-base';
import Icon from "react-native-vector-icons/Entypo";
import { blue, white } from '../assets/colors';
import { useNavigation } from '@react-navigation/core';

function Pagination() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Button style={styles.button}>
                    <Icon name='chevron-left' style={styles.icon} />
                </Button>

                <Text>pag.</Text>

                {/* <Button style={styles.button}>
                    <Text>12</Text>
                </Button> */}
                <Picker
                    note
                    mode="dialog"
                    iosHeader="Select Year"
                    placeholder={"Select One"}
                    placeholderStyle={{ color: "#2874F0" }}

                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: 60, height: 30 }}
                    onValueChange={(value) => onValueChange(value)}
                >
                    <Picker.Item key={'2'} label={'2'} value={'2'} />
                    <Picker.Item key={'3'} label={'3'} value={'3'} />
                    <Picker.Item key={'4'} label={'4'} value={'4'} />
                    <Picker.Item key={'5'} label={'5'} value={'5'} />
                </Picker>

                <Text>fr. 140</Text>

                <Button style={styles.button}>
                    <Icon name='chevron-right' style={styles.icon} />
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: white,
        padding: 5,
        marginBottom: 20,
        alignContent: 'center'
    },
    button: {
        width: 70,
        backgroundColor: blue,
        justifyContent: 'center'
    },
    icon: {
        color: white,
        fontSize: 25,
    }
})

export default Pagination;
