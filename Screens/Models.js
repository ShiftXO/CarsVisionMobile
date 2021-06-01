import React, { Component, useEffect, useContext, useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Footer } from 'native-base';
import Icon from "react-native-vector-icons/Entypo";

import Option from "../components/Option";
import { gray3, blue, white } from '../assets/colors'
import FooterTab from '../components/Footer';
import SelectModels from "../components/SelectModels";

import { useNavigation } from '@react-navigation/core';
import SearchContext from "../contexts/SearchContext";

function Models(params, route) {
    const navigation = useNavigation();
    const { search, setSearch } = useContext(SearchContext);
    let arr = [];

    function selectModel(model) {
        setSearch({
            ...search,
            models: arr
        })

        navigation.navigate('Home')
        console.log('search', search);
    }

    return (
        <Container>
            <Content>
                <List>
                    {params.route.params.models.map(x => {
                        return (
                            <SelectModels key={x} model={x} arr={arr} />
                        )
                    })}
                </List>
            </Content>

            <Footer style={styles.footerContainer}>
                <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => selectModel()}>
                    <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>
            </Footer>
        </Container>
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

export default Models;