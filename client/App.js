import Home from './screens/Home';
import Chats from './screens/Chats';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chats" component={Chats} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}