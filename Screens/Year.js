import React, { Component, useState, useEffect, useContext } from "react";
import { Container, Header, Content, Icon, Picker, Form, Label } from "native-base";
import FooterTab from "../components/Footer";
import { useNavigation } from "@react-navigation/core";
import SearchContext from "../contexts/SearchContext";

function Year() {
    const navigation = useNavigation();
    const { search, setSearch } = useContext(SearchContext);

    const currentYear = new Date().getFullYear();
    const years = Array(currentYear - (currentYear - 91)).fill('').map((v, idx) => currentYear - idx);

    const onValueChangeFrom = (value) => {
        setSearch({
            ...search,
            year: {
                ...search.year,
                from: value
            }
        })
    }

    const onValueChangeTo = (value) => {
        setSearch({
            ...search,
            year: {
                ...search.year,
                to: value
            }
        })
    }

    return (
        <Container style={{ flex: 1, padding: 10 }}>
            <Content>
                <Form>
                    <Label style={{ alignSelf: 'center' }}>From</Label>
                    <Picker
                        mode="dropdown"
                        iosHeader="Select Year"
                        placeholder={"Select One"}
                        placeholderStyle={{ color: "#2874F0" }}
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: '100%', height: 50, }}
                        on
                        onValueChange={(value) => onValueChangeFrom(value)}
                    >
                        <Picker.Item key={'all'} label={'All'} value={'all'} />
                        {years.map(x => { return <Picker.Item key={x} label={x.toString()} value={x} /> })}
                    </Picker>

                    <Label style={{ alignSelf: 'center' }}>To</Label>
                    <Picker
                        mode="dropdown"
                        iosHeader="Select Year"
                        placeholder={"Select One"}
                        placeholderStyle={{ color: "#2874F0" }}
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: '100%', height: 50, }}
                        on
                        onValueChange={(value) => onValueChangeTo(value)}
                    >
                        <Picker.Item key={'all'} label={'All'} value={'all'} />
                        {years.map(x => { return <Picker.Item key={x} label={x.toString()} value={x} /> })}
                    </Picker>
                </Form>
            </Content>
            <FooterTab />
        </Container>
    );
}

export default Year;