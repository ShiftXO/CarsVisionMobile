import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { backgroundGray } from '../assets/colors';

import Car from "../components/Car";
import Search from '../components/Search';
import Pagination from '../components/Pagination';

function Cars(params) {

    const cars = [{
        "id": "321",
        "Make": "BMW",
        "Model": "e60",
        "Details": "m-paket 535d kosmos",
        "Engine": "Diesel",
        "Price": "20000",
        "ImageUrl": "https://wallpaperaccess.com/full/1600667.jpg",
        "Year": "may, 2007",
        "Origin": "София"
    },
    {
        "id": "123",
        "Make": "BMW",
        "Model": "e92",
        "Details": "M 335d vselena",
        "Engine": "Diesel",
        "Price": "23000",
        "ImageUrl": "https://a.allegroimg.com/s1024/0c49bc/0fc5bbcf4d27bb92603536ec85bf",
        "Year": "sep, 2012",
        "Origin": "Plovdiv"
    },]

    return (
        <ScrollView style={styles.container}>
            <Search />

            {cars.map(x => <Car key={x.id} data={x} />)}

            <Pagination />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        padding: 10,
        backgroundColor: backgroundGray
    }
});

export default Cars;