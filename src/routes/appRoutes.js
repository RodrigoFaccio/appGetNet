import React from 'react';
import {Image, ProgressViewIOSBase, Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
const TabBottom = createBottomTabNavigator();
const TabStack = createStackNavigator();
import {useNavigation} from '@react-navigation/native';
import Payment from '../pages/Payment';
import Produtos from '../pages/Produtos';
import Ingressos from '../pages/Ingressos';
import Qr from '../pages/Qr';
import PreecherIngressos from '../pages/PreecherIngressos';

const Tab = () => {
  const navigation = useNavigation();

  return (
    <TabStack.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5,
        },
      }}>
      <TabStack.Screen
        name="Ingressos"
        options={{title: ''}}
        component={Ingressos}
      />
      <TabStack.Screen
        name="Payment"
        options={{title: ''}}
        component={Payment}
      />
      <TabStack.Screen
        name="Produtos"
        options={{title: ''}}
        component={Produtos}
      />

      <TabStack.Screen
        name="PreecherIngressos"
        options={{title: ''}}
        component={PreecherIngressos}
      />
      <TabStack.Screen name="Qr" options={{title: ''}} component={Qr} />
    </TabStack.Navigator>
  );
};

export default Tab;
