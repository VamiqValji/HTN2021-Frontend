/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from 'react';
import { Pressable } from 'react-native';
import Vew from '../components/custom/Vew';

import Colors from '../constants/Colors';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();
const Drawer = createDrawerNavigator();

function BottomTabNavigator() {
  return (
    <>
      {/* <BottomTab.Navigator
        initialRouteName="TabOne"
        screenOptions={{
          tabBarActiveTintColor: Colors.brand.dark,
          tabBarShowLabel: false,
          tabBarItemStyle:{paddingBottom:3}
        }}
        >
        <BottomTab.Screen
          name="TabOne"
          component={TabOneScreen}
          options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
            title: 'Dashboard',
            header: (props => <Vew p={20}></Vew>),
            tabBarIcon: ({ focused }) => <TabBarIcon name="code" color={focused ? Colors.brand.green : Colors.brand.dark} />,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Modal')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}>
                <FontAwesome
                  name="info-circle"
                  size={25}
                  color={Colors.brand.dark}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),
            headerStyle: {
              // backgroundColor: Colors.brand.green,
              elevation:0, shadowOpacity:0,
            },
          })}
        />
        <BottomTab.Screen
          name="TabTwo"
          component={TabTwoScreen}
          options={{
            title: 'Tab Two',
            tabBarIcon: ({ focused }) => <TabBarIcon name="code" color={focused ? Colors.brand.green : Colors.brand.dark} />,
          }}
        />
      </BottomTab.Navigator> */}

      <Drawer.Navigator initialRouteName="Dashboard" screenOptions={{
        headerStyle: {
          backgroundColor: Colors.brand.green,
          elevation: 0,
        },
        headerTitleStyle: {
          color: "white"
        },
        drawerStyle: {
          backgroundColor: Colors.brand.green
        },
        headerTintColor:"white"
      }}>
        <Drawer.Screen name="Dashboard" component={TabOneScreen} 
          options={{
            drawerIcon: () => (
              <FontAwesome color="white" size={16} name="bars" />
            ),
            
          }}
        />
        <Drawer.Screen name="Search" component={TabOneScreen} options={{

        }} />
        <Drawer.Screen name="Activity" component={TabOneScreen} />
        <Drawer.Screen name="Landlord" component={TabOneScreen} />
        <Drawer.Screen name="Message" component={TabOneScreen} />
        <Drawer.Screen name="Settings" component={TabOneScreen} />
      </Drawer.Navigator>
    </>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
