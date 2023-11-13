import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './src/components/SplashScreen';
import LoginScreen from './src/components/Login';
import SigninScreen from './src/components/Sign_in';
import DashboardScreen from './src/components/Dashboard';
import PDFScreen from './src/components/GenerateArchive';
import ChartScreen from './src/components/GenerateChart';
import Profile from './src/components/Profile';
import { ActiveIconProvider } from './src/components/ActiveIconProvider';
import Toolbar from './src/components/Toolbar';
import { ChartDataProvider } from './src/components/ChartDataContext';
import RegisterScreen from './src/components/Register';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <ChartDataProvider>
    <Tab.Navigator tabBar={props => <Toolbar {...props} />}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Home" component={DashboardScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="PDF" component={PDFScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Chart" component={ChartScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    </Tab.Navigator>
    </ChartDataProvider>
  );
}

export default function App() {
  return (
    <ActiveIconProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Signin" component={SigninScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ActiveIconProvider>
  );
}
