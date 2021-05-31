import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Text, Button, Footer, FooterTab, Icon } from "native-base";
import SelectItem from "../components/SelectItem";
import { blue, gray, white } from '../assets/colors';
import SearchContext from '../contexts/SearchContext';

function SearchButton() {
    const navigation = useNavigation();
    const { search, setSearch } = useContext(SearchContext);

    return (
        <Footer style={styles.container}>
            <FooterTab style={styles.container}>
                <Button onPress={() => navigation.navigate('Cars')} style={styles.button}>
                    <Icon name="search" style={styles.icon} />
                    <Text style={styles.text}>Search</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: white,
    },
    button: {
        borderRadius: 10,
        backgroundColor: blue,
        width: '100%',
        height: '100%',
        flexDirection: 'row'
    },
    text: {
        fontSize: 17,
        color: white,

    },
    icon: {
        color: white,
        margin: 0,
    }
})

export default SearchButton;