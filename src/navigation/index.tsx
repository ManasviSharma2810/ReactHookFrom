import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import CreateAccount from '../screens/create_account';
import ProfileSetup from '../screens/profile_setup';
import AvatarScreen from '../screens/avatar';
import OtpScreen from '../screens/otp';
const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        /> */}
          <Stack.Screen
          name="ProfileSetup"
          component={ProfileSetup}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="AvatarScreen"
          component={AvatarScreen}
          options={{headerShown: false}}
        /> 
          {/* <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
