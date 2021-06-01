import React, { Component, useContext, useState } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right } from 'native-base';
import Icon from "react-native-vector-icons/Entypo";

import Option from "../components/Option";
import options from "../assets/data";
import SearchContext from '../contexts/SearchContext';
import Footer from "../components/Footer";

function Options({ route }) {
    let { page } = route.params;
    page = page.toLowerCase();

    const { search, setSearch } = useContext(SearchContext);

    const values = {
        engine: ['Petrol', 'Diesel', 'Electric', 'Hybrid'],
        gearbox: ['Manual', 'Automatic', 'Semi-Automatic'],
        eurostandart: ['Euro 1', 'Euro 2', 'Euro 3', 'Euro 4', 'Euro 5', 'Euro 6'],
        color: ['Black', 'White', 'Red', 'Blue', 'Gray'],
        order: ['Make/Model/Price', 'Price', 'Year', 'Mileage', 'Newest']
    }

    const Select = (value) => {
        console.log(value);

        if (search[page] == value) {
            setSearch({
                ...search,
                [page]: ''
            })
        } else {
            setSearch({
                ...search,
                [page]: value
            })
        }
    }

    return (
        <Container>
            <Content>
                <List>
                    {values[page].map(x => {
                        return <Option key={x} value={x} Select={Select} page={page} />
                    })}
                </List>
            </Content>

            <Footer />
        </Container>
    );
}

export default Options;