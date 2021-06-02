import React, { useContext } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Picker, Icon, List, Radio, Text, ListItem, Left, Right } from 'native-base';
import { StyleSheet } from "react-native";

import FooterTab from '../components/Footer';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import SearchContext from '../contexts/SearchContext';

function Power() {
    const navigation = useNavigation();
    const { search, setSearch } = useContext(SearchContext);


    const onValueChangeFrom = (value) => {
        setSearch({
            ...search,
            power: {
                ...search.power,
                from: value
            }
        })
    }

    const onValueChangeTo = (value) => {
        setSearch({
            ...search,
            power: {
                ...search.power,
                to: value
            }
        })
    }

    return (
        <Container style={styles.container}>
            <Content>
                <Item rounded underline floatingLabel last>
                    <Label>From</Label>
                    <Input keyboardType='number-pad' style={styles.input} onChangeText={value => onValueChangeFrom(value)} />
                </Item>

                <Item rounded underline floatingLabel last>
                    <Label>To</Label>
                    <Input keyboardType='number-pad' style={styles.input} onChangeText={value => onValueChangeTo(value)} />
                </Item>
            </Content>

            <FooterTab />
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    input: {
        fontSize: 21,
    },
});

export default Power;