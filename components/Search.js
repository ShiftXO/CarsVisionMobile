import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { ListItem, Text, Left, Right, Grid, Row, Col } from 'native-base';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Body } from 'native-base';
import Icon from "react-native-vector-icons/Entypo";
import { blue, white } from '../assets/colors';
import { useNavigation } from '@react-navigation/core';

function Search() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>{'1-20 from 3000'} listings</Text>
            <Text>ordered by {'price'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: white,
        padding: 5,
        marginBottom: 10,
    }
})

export default Search;
