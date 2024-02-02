
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calculator from './Calculator'
import HistoryScreen from './HistoryScreen'


const Stack = createNativeStackNavigator();


export default function App() {


  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Calculator" component={Calculator} />
          <Stack.Screen name="History" component={HistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
