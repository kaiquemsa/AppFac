import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import LoginScreen from './Login';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} 
        options={{
        gestureEnabled: false,
        headerLeft: null,
      }}
      />
      <Stack.Screen name="Login" component={LoginScreen} 
       options={{
        gestureEnabled: false,
        headerLeft: null,
      }}
      />
      <Stack.Screen></Stack.Screen>
    </Stack.Navigator>
  );
}
