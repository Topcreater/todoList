import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CurrentTodos from '../screens/ CurrentTodos';
import CreateTodos from '../screens/CreateTodos';
import CompleteTodos from '../screens/CompleteTodos';
import 'react-native-gesture-handler';
import createIconHover from '../assests/icons/createHover.png';
import createIcon from '../assests/icons/createe.png';
import CompleteIcon from '../assests/icons/view.png';
import CompleteIconHover from '../assests/icons/viewHover.png';
import editIcon from '../assests/icons/edit.png';
import editIconHover from '../assests/icons/editHover.png';

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
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: '#89CFF3',
            alignItems: 'center',
            height: 65,
          },
          tabBarItemStyle: {
            marginTop: 10,
          },
          tabBarLabelStyle: {
            marginBottom: 10,
          },
        }}>
        <Tab.Screen
          name="CurrentTodos"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                source={focused ? CompleteIconHover : CompleteIcon}
                style={{width: 28, height: 28}}
              />
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
              <Image
                source={focused ? createIconHover : createIcon}
                style={{width: 30, height: 30}}
              />
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
              <Image
                source={focused ? editIconHover : editIcon}
                style={{width: 28, height: 28}}
              />
            ),
            tabBarLabel: 'View',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
