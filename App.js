import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraScreen from './src/Screens/Camera';
import MapScreen from './src/Screens/Map';
import PreviewScreen from './src/Screens/Preview'


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Camera">
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Preview" component={PreviewScreen} />
        </Stack.Navigator>
  </NavigationContainer>
  );
}


