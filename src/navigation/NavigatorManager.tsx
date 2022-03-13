import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigninScreen from '../screens/SigninScreen';
import {InitialScreen, DashboardScreen} from '../screens';

export type AuthStackParams = {
  InitialScreen: undefined;
  Signin: undefined;
  Signup: undefined;
};

const AuthStackCreator = createNativeStackNavigator<AuthStackParams>();

export const AuthStack = ({
  initScreen = 'InitialScreen',
}: {
  initScreen?: keyof AuthStackParams;
}) => {
  return (
    <AuthStackCreator.Navigator
      initialRouteName={initScreen}
      screenOptions={{headerShown: false}}>
      <AuthStackCreator.Screen
        name="InitialScreen"
        component={InitialScreen}
        options={{headerShown: false}}
      />
      <AuthStackCreator.Screen
        name="Signin"
        component={SigninScreen}
        options={{headerShown: false}}
      />
      <AuthStackCreator.Screen
        name="Signup"
        component={SigninScreen}
        options={{headerShown: false}}
      />
    </AuthStackCreator.Navigator>
  );
};

export type MainStackParamList = {
  SettingScreen: undefined;
  DashboardScreen: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = ({
  initScreen = 'DashboardScreen',
}: {
  initScreen?: keyof MainStackParamList;
}) => {
  return (
    <MainStack.Navigator
      initialRouteName={initScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="SettingScreen" component={InitialScreen} />
      <MainStack.Screen name="DashboardScreen" component={DashboardScreen} />
    </MainStack.Navigator>
  );
};
