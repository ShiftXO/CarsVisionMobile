import React, { Component, useContext } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from "react-native-vector-icons/Entypo";
import { blue } from '../assets/colors';

import { useNavigation } from '@react-navigation/native';
import SearchContext from "../contexts/SearchContext";

function SelectMileage(props) {
    const navigation = useNavigation();
    const { search, setSearch } = useContext(SearchContext);

    const clearSearch = () => {
        setSearch({
            ...search,
            mileage: ''
        })
    }

    return (
        <View style={styles.buttonStack}>
            <TouchableOpacity activeOpacity={1} style={styles.button}>
                <Grid>
                    <Col size={90} onPress={() => navigation.navigate('Mileage')}>
                        {search.mileage == '' ? (
                            <>
                                <Text style={styles.initial}>Mileage</Text>
                            </>
                        ) : (
                            <>
                                <Text style={styles.model2}>Mileage</Text>
                                <Text style={styles.e60}>{search.mileage}</Text>
                            </>
                        )}
                    </Col>
                    <Col size={10}>
                        {search.mileage == '' ? (
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

export default SelectMileage;
