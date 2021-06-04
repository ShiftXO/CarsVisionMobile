import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./Screens/Home";
import Models from "./Screens/Models";
import Price from './Screens/Price';
import Options from './Screens/Select';
import Year from './Screens/Year';
import Make from './Screens/Make';
import Power from './Screens/Power';
import Mileage from './Screens/Mileage';
import Cars from './Screens/Cars';
import Details from './Screens/Details';
import CreateListing from './Screens/CreateListing';

import SearchContext from './contexts/SearchContext';

const Stack = createStackNavigator();

export default function App() {
  const [search, setSearch] = useState({
    make: '',
    models: [],
    price: {
      from: '',
      to: '',
    },
    year: {
      from: '',
      to: '',
    },
    engine: '',
    gearbox: '',
    power: {
      from: '',
      to: '',
    },
    eurostandart: '',
    category: '',
    mileage: '',
    color: '',
    order: ''
  });

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{
            headerTitle: (props) => ( // App Logo
              <Image
                style={{ width: 150, height: 50, alignSelf: 'center' }}
                source={require('./assets/logo.jpg')}
                resizeMode='contain'
              />
            ),
            headerTitleStyle: { flex: 1, textAlign: 'center' },
          }} />
          <Stack.Screen name="Models" component={Models} />
          <Stack.Screen name="Make" component={Make} />
          <Stack.Screen name="Price" component={Price} />
          <Stack.Screen name="Options" component={Options} />
          <Stack.Screen name="Year" component={Year} />
          <Stack.Screen name="Power" component={Power} />
          <Stack.Screen name="Mileage" component={Mileage} />
          <Stack.Screen name="Cars" component={Cars} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="CreateListing" component={CreateListing} />
        </Stack.Navigator>
      </NavigationContainer>
    </SearchContext.Provider>
  );
}