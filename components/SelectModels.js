import React, { useContext, useEffect, useState } from 'react';
import { ListItem, Text, Left, Right } from 'native-base';
import Icon from "react-native-vector-icons/Entypo";
import { blue, gray3 } from '../assets/colors';
import { useNavigation } from '@react-navigation/core';
import SearchContext from '../contexts/SearchContext';

function SelectModels(params) {
    const navigation = useNavigation();
    const { search, setSearch } = useContext(SearchContext);
    const [isSelected, setIsSelected] = useState(false);


    function selectModel(model) {
        setSearch({
            ...search,
            models: params.arr
        })
    }

    const add = (model) => {
        let index = params.arr.indexOf(model);
        if (index > -1) {
            console.log('1st');
            params.arr.splice(index, 1);
            setIsSelected(false)
            return
        }
        if (params.arr.length > 2) {
            console.log('2nd');
            return
        }

        console.log('3th');
        params.arr.push(model);
        setIsSelected(true);

        console.log(params.arr.length);
    }

    return (
        <ListItem key={params.model} selected onPress={() => add(params.model)}>
            <Left>
                <Text style={{ color: isSelected ? blue : gray3 }}>{params.model}</Text>
            </Left>
            <Right>
                <Icon size={20} style={{ color: isSelected ? blue : gray3 }} name="check" />
            </Right>
        </ListItem>
    );
}

export default SelectModels;