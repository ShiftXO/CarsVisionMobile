import React, { useContext } from 'react';
import { Container, Content, List, ListItem, Text, Left, Right } from 'native-base';
import Icon from "react-native-vector-icons/Entypo";

import { blue, gray, gray3 } from '../assets/colors'
import FooterTab from '../components/Footer';
import SearchContext from '../contexts/SearchContext';
function Mileage(params) {
    const { search, setSearch } = useContext(SearchContext);

    const mileageArr = []
    for (let i = 10000; i <= 150000; i += 10000) {
        console.log(i);
        mileageArr.push(i)
    }

    const Select = (value) => {
        if (search.mileage == value) {
            setSearch({
                ...search,
                mileage: ''
            })
        } else {
            setSearch({
                ...search,
                mileage: value
            })
        }
    }

    return (
        <Container>
            <Content>
                <List>
                    {mileageArr.map(x =>
                        <ListItem key={x} onPress={() => Select(x)}>
                            <Left>
                                <Text style={search.mileage == x ? { color: blue } : { color: gray3 }}>To: {x}</Text>
                            </Left>
                            <Right>
                                <Icon size={20} color={search.mileage == x ? blue : gray3} name="check" />
                            </Right>
                        </ListItem>
                    )}

                    <ListItem key={200000} onPress={() => Select(200000)}>
                        <Left>
                            <Text style={search.mileage == 200000 ? { color: blue } : { color: gray3 }}>To: 20000</Text>
                        </Left>
                        <Right>
                            <Icon size={20} color={search.mileage == 200000 ? blue : gray3} name="check" />
                        </Right>
                    </ListItem>

                    <ListItem key={250000} onPress={() => Select(250000)}>
                        <Left>
                            <Text style={search.mileage == 250000 ? { color: blue } : { color: gray3 }}>To: 250000</Text>
                        </Left>
                        <Right>
                            <Icon size={20} color={search.mileage == 250000 ? blue : gray3} name="check" />
                        </Right>
                    </ListItem>

                    <ListItem key={300000} onPress={() => Select(300000)}>
                        <Left>
                            <Text style={search.mileage == 300000 ? { color: blue } : { color: gray3 }}>To: 300000</Text>
                        </Left>
                        <Right>
                            <Icon size={20} color={search.mileage == 300000 ? blue : gray3} name="check" />
                        </Right>
                    </ListItem>

                    <ListItem key={300001} onPress={() => Select(300001)}>
                        <Left>
                            <Text style={search.mileage == 300001 ? { color: blue } : { color: gray3 }}>Over: 300000</Text>
                        </Left>
                        <Right>
                            <Icon size={20} color={search.mileage == 300001 ? blue : gray3} name="check" />
                        </Right>
                    </ListItem>
                </List>
            </Content>

            <FooterTab />
        </Container>
    );
}
export default Mileage;