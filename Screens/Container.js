import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function Container({ children }) {
    return (
        <ScrollView>
            <View style={{ padding: 20 }}>
                {children}
            </View>
        </ScrollView>
    );
}

export default Container;