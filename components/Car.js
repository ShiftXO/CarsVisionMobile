import React, { Component } from 'react';
import { Image, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { ListItem, Text, Left, Right, Grid, Row, Col } from 'native-base';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Body } from 'native-base';
import Icon from "react-native-vector-icons/AntDesign";
import { blue, gray, gray2, gray3, white } from '../assets/colors';
import { useNavigation } from '@react-navigation/core';

function Car(props) {
    const navigation = useNavigation();
    console.log(props.data.Details);

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Details')}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: props.data.ImageUrl }}
                            style={styles.image}
                        ></Image>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>
                            {props.data.Make} {props.data.Model}
                            <Text style={styles.subTitle}> {props.data.Details}</Text>
                        </Text>
                        <Text style={styles.price}>{props.data.Price} lv.</Text>
                        <Text>{props.data.Year}, {props.data.Engine}</Text>
                        <Text style={styles.origin}>{props.data.Origin}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="staro" style={styles.icon} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: white,
        backgroundColor: white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    details: {
        width: '45%',
        marginTop: 10
    },
    iconContainer: {
        width: '15%',
        marginTop: 10,
    },
    icon: {
        width: '100%',
        fontSize: 25,
        color: gray3
    },
    top: {
        flexDirection: 'row'
    },
    imageContainer: {
        width: '40%',
        height: 120,
        margin: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    title: {
        fontWeight: 'bold'
    },
    subTitle: {
        fontWeight: 'normal',
        color: 'gray'
    },
    price: {
        fontWeight: 'bold',
        color: blue
    },
    origin: {
        color: 'gray',
        fontSize: 13,
        fontStyle: 'italic'
    }
})

export default Car;
