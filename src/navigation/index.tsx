import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import {AuthenticationContext} from '../services/auth/authentication';
import {
  MainNavigator,
  AuthStack,
  MainStackParamList,
  AuthStackParams,
} from './NavigatorManager';
import {Colors} from '../constants/colors';
import {LOGO} from '../assets';

export type RootStackParams = {
  AuthNavigator: undefined;
  LoadingScreen: undefined;
  MainNavigator: undefined;
};

const RootStackCreator = createNativeStackNavigator<RootStackParams>();

export const navigationRef =
  React.createRef<
    NavigationContainerRef<
      RootStackParams & MainStackParamList & AuthStackParams
    >
  >();

function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={LOGO} />
      <Text style={styles.headerTxt}>loading...</Text>
    </View>
  );
}

export default function RootNavigation() {
  const authContent = useContext(AuthenticationContext);

  const LoadRouteNavigation = React.useMemo(() => {
    if (authContent?.status === 'loading') {
      return (
        <RootStackCreator.Screen
          name="LoadingScreen"
          component={LoadingScreen}
        />
      );
    } else if (authContent?.accessToken) {
      return (
        <RootStackCreator.Screen name="MainNavigator">
          {() => <MainNavigator initScreen={'DashboardScreen'} />}
        </RootStackCreator.Screen>
      );
    } else {
      return (
        <RootStackCreator.Screen name="AuthNavigator">
          {() => <AuthStack initScreen={'Signin'} />}
        </RootStackCreator.Screen>
      );
    }
  }, [authContent?.accessToken, authContent?.status]);
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStackCreator.Navigator screenOptions={{headerShown: false}}>
        {LoadRouteNavigation}
      </RootStackCreator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 24,
    color: Colors.orange,
  },
  image: {borderRadius: 16, width: 120, height: 120},
});
