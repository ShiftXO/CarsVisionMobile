import React, { Component, useContext } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from "react-native-vector-icons/Entypo";
import { blue } from '../assets/colors';

import { useNavigation } from '@react-navigation/native';
import SearchContext from "../contexts/SearchContext";

function Custom(props) {
    const navigation = useNavigation();
    const { search, setSearch } = useContext(SearchContext);

    const selectName = props.page;
    const page = props.page.toLowerCase();

    const clearSearch = () => {
        setSearch({
            ...search,
            [page]: {
                to: '',
                from: ''
            }
        })

        console.log(search);
    }

    return (
        <View style={styles.buttonStack}>
            <TouchableOpacity activeOpacity={1} style={styles.button}>
                <Grid>
                    <Col size={90} onPress={() => navigation.navigate(selectName)}>
                        {search[page].from == '' && search[page].to == '' ? (
                            <>
                                <Text style={styles.initial}>{selectName}</Text>
                            </>
                        ) : (
                            <>
                                <Text style={styles.model2}>{selectName}</Text>
                                <Text style={styles.e60}>{search[page].from} {search[page].to}</Text>
                            </>
                        )}
                    </Col>
                    <Col size={10}>
                        {search[page].from == '' && search[page].to == '' ? (
                            <Icon name="chevron-right" style={styles.icon} />
                        ) : (
                            <Icon name="cross" style={styles.icon} onPress={() => clearSearch()} />
                        )}
                    </Col>
                </Grid>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    initial: {
        top: 10,
        left: 11,
        position: "absolute",
        color: "#121212",
        fontSize: 18
    },
    button: {
        width: '95%',
        height: 55,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "rgba(184,184,184,1)",
        alignContent: 'center'
    },
    model: {
        color: "black",
        fontSize: 21,
    },
    icon: {
        justifyContent: 'space-between',
        color: "rgba(128,128,128,1)",
        fontSize: 25,
    },
    buttonStack: {
        alignItems: 'center',
    },
    e60: {
        top: 23,
        left: 11,
        position: "absolute",
        color: blue,

    },
    model2: {
        top: 4,
        left: 11,
        position: "absolute",
        color: "#121212",
        fontSize: 16
    },
});

export default Custom;
