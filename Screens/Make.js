import React, { Component, useEffect, useContext } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right } from 'native-base';
import Icon from "react-native-vector-icons/Entypo";

import Option from "../components/Option";
import { gray, blue, gray2, gray3 } from '../assets/colors'
import FooterTab from '../components/Footer';
import { cars } from '../assets/cars';
import { useNavigation } from '@react-navigation/core';
import SearchContext from "../contexts/SearchContext";

function Make(params) {
    const navigation = useNavigation();
    const { search, setSearch } = useContext(SearchContext);

    function selectMake(make) {
        let models = cars.find(x => x.brand == make).models;

        setSearch({
            ...search,
            make: make
        })

        navigation.navigate('Models', { models })
    }

    return (
        <Container>
            <Content>
                <List>
                    {cars.map(x => {
                        let color = search.make == x.brand ? blue : gray3;
                        return (
                            <ListItem key={x.brand} onPress={() => selectMake(x.brand)}>
                                <Left>
                                    <Text style={{ color: color }}>{x.brand}</Text>
                                </Left>
                                <Right>
                                    <Icon size={20} color={color} name="check" />
                                </Right>
                            </ListItem>
                        )
                    })}
                </List>
            </Content>

            <FooterTab />
        </Container>
    );
}
export default Make;