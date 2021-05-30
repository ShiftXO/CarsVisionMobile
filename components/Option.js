import React, { Component, useContext, useState } from 'react';
import { ListItem, Text, Left, Right } from 'native-base';
import Icon from "react-native-vector-icons/Entypo";
import { blue, gray3 } from '../assets/colors';
import { useNavigation } from '@react-navigation/core';
import SearchContext from '../contexts/SearchContext';

function Option(params) {
    const navigation = useNavigation();
    const { search, setSearch } = useContext(SearchContext);

    const Select = (value) => {
        params.Select(value);
    }

    return (
        <ListItem onPress={() => Select(params.value)}>
            <Left>
                <Text style={search[params.page] == params.value ? { color: blue } : { color: gray3 }}>{params.value}</Text>
            </Left>
            <Right>
                <Icon size={20} color={search[params.page] == params.value ? blue : gray3} name="check" />
            </Right>
        </ListItem>
    );
}
export default Option;