import React, { useContext, useState } from 'react';
import { StyleSheet } from "react-native";
import { Container, Header, Content, Form, Item, Input, Label, Picker, Icon, List, Radio, Text, ListItem, Left, Right } from 'native-base';
import { blue } from '../assets/colors';

import FooterTab from '../components/Footer';
import SearchContext from '../contexts/SearchContext';

function Price(params, route) {
    const [isSelected, setIsSelected] = useState(true);
    const { search, setSearch } = useContext(SearchContext);

    function toggle() {
        setIsSelected(!isSelected);
        console.log(search);
    }

    function setFrom(value) {
        console.log(value);
        setSearch({
            ...search,
            price: {
                ...search.price,
                from: value
            }
        })
    }

    function setTo(value) {
        console.log(value);
        setSearch({
            ...search,
            price: {
                ...search.price,
                to: value
            }
        })
    }

    return (
        <Container style={{ flex: 1, padding: 10 }}>
            <Content>
                <Item rounded underline floatingLabel last>
                    <Label>From</Label>
                    <Input keyboardType='number-pad' style={styles.input} value={search.price.from} onChangeText={value => setFrom(value)} />
                </Item>

                <Item rounded underline floatingLabel last>
                    <Label>To</Label>
                    <Input keyboardType='number-pad' style={styles.input} value={search.price.to} onChangeText={value => setTo(value)} />
                </Item>

                <List>
                    <ListItem onPress={() => toggle()} >
                        <Left>
                            <Text>Euro</Text>
                        </Left>
                        <Right>
                            <Radio
                                color={blue}
                                selectedColor={blue}
                                selected={!isSelected}
                            />
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => toggle()} >
                        <Left>
                            <Text>Leva</Text>
                        </Left>
                        <Right>
                            <Radio
                                color={blue}
                                selectedColor={blue}
                                selected={isSelected}
                            />
                        </Right>
                    </ListItem>
                </List>
            </Content>

            <FooterTab />
        </Container>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 21,
    },
});

export default Price;