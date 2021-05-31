import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from "native-base";
import SelectItem from "../components/SelectItem";
import { white } from '../assets/colors';
import SearchButton from '../components/SearchButton';
import SelectMakeAndModel from './SelectMakeAndModel';
import SelectMileage from "./SelectMileage";
import Custom from "./Custom";

function HomeScreen() {
    const navigation = useNavigation();

    return (
        <Container style={styles.container}>
            <ScrollView>
                <SelectMakeAndModel />

                <Custom page={'Price'} />
                <Custom page={'Power'} />
                <Custom page={'Year'} />
                <SelectItem childPage={'Engine'} />
                <SelectItem childPage={'Gearbox'} />
                <SelectItem childPage={'Eurostandart'} />
                <SelectMileage childPage={'Mileage'} />
                <SelectItem childPage={'Color'} />
                <SelectItem childPage={'Order'} />
            </ScrollView>

            <SearchButton />
        </Container >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: white
    }
});

export default HomeScreen