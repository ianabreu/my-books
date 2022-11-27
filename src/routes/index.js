import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import New from '../pages/New';

export default function Routes() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="New" component={New} options={{title: 'Cadastrar novo livro'}}/>
        </Stack.Navigator>
    );
}