import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from "./TabOne/Index";
import MapScreen from './TabOne/MapScreen';
import Vew from '../components/custom/Vew';
import Txt from '../components/custom/Txt';
import { useAuth } from '../context/AuthContext';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

interface TabOneScreenInterface{
  navigation?: any
}

export default function TabOneScreen({ navigation }: TabOneScreenInterface) {
  const {email, loggedIn} = useAuth();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Index} 
        options={{
          headerTitle: (props => (
            <Vew flexDir="column" h={70} bg={Colors.brand.green}>
              <Txt fontSize={14} flexWrap="wrap" color="white">Welcome back!</Txt>
              <Txt fontWeight="700" fontSize={30} flexWrap="wrap" color="white">{email}</Txt>
            </Vew>
          )),
          headerTintColor: "whitesmoke", // back arrow
          headerStyle: {
            backgroundColor: Colors.brand.green,
            elevation:0, shadowOpacity:0,
          },
          // cardStyle:{
          //   backgroundColor: Colors.brand.dark,
          // }
        }}
      />
      <Stack.Screen name="Map" component={MapScreen} 
        options={{
          headerTitleAlign: "center",
          headerTitle: (props => <Txt fontWeight="700" fontSize={22} textAlign="center" flexWrap="wrap">Map</Txt>),
          headerTintColor: "whitesmoke", // back arrow
          headerStyle: {
            backgroundColor: Colors.brand.dark,
            elevation:0, shadowOpacity:0
          },
          // cardStyle:{
          //   backgroundColor: Colors.brand.dark,
          // }
      }}
      />
    </Stack.Navigator>
    
  );
}