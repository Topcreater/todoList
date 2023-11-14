import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CurrentTodos from '../screens/ CurrentTodos';
import CreateTodos from '../screens/CreateTodos';
import CompleteTodos from '../screens/CompleteTodos';
import 'react-native-gesture-handler';
import createIcon from '../assests/icons/add-file.png';
import CompleteIcon from '../assests/icons/clipboard.png';
import ViewIcon from '../assests/icons/file.png';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  const HomeStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CurrentTodos" component={CurrentTodos} />
      <Stack.Screen name="CreateTodos" component={CreateTodos} />
      <Stack.Screen name="CompleteTodos" component={CompleteTodos} />
    </Stack.Navigator>
  );
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="CreateTodos"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#FF7C84',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: '#11A3C9',
            alignItems: 'center',
            height: 65,
          },
          tabBarItemStyle: {
            marginTop: 10,
          },
          tabBarLabelStyle: {
            marginBottom: 10,
            color: 'black',
          },
        }}>
        <Tab.Screen
          name="CurrentTodos"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image source={CompleteIcon} style={{width: 24, height: 24}} />
            ),
            tabBarLabel: 'Current',
          }}
        />
        <Tab.Screen
          name="CreateTodos"
          component={CreateTodos}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image source={createIcon} style={{width: 24, height: 24}} />
            ),
            tabBarLabel: 'Create',
          }}
        />
        <Tab.Screen
          name="CompleteTodos"
          component={CompleteTodos}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image source={ViewIcon} style={{width: 24, height: 24}} />
            ),
            tabBarLabel: 'View',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
