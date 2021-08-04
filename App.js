import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Colors from './src/consts/colors';

import { LoginScreen,AddReviewScreen,UserProfileScreen,
HomeScreen,DetailsScreen,ReviewScreen, StartScreen,
ResetPasswordScreen, RegisterScreen,ChatScreen} 
from './src/views/screens';


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <Stack.Navigator initialRouteName="StartScreen" screenOptions={{headerShown: false}}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
        <Stack.Screen name="AddReviewScreen" component={AddReviewScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />

        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
