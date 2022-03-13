import React from 'react';
import './languages/index';
import {StatusBar} from 'react-native';
import RootNavigation from './navigation';
import {Provider as ReduxProvider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './store/store';
import './config/ReactotronConfig';
import './config/ServiceConfig';
import AppProvider from './provider/App';
import AuthenticationProvider from './services/auth/authentication';

if (__DEV__) {
  import('./config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

const AppSwapper = (props: JSX.IntrinsicAttributes) => {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}></PersistGate> */}
        <AuthenticationProvider>
          <AppProvider>
            <App {...props} />
          </AppProvider>
        </AuthenticationProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
};

const App = () => {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <RootNavigation />
    </>
  );
};

export default __DEV__ ? console.tron.overlay(AppSwapper) : AppSwapper;
// export default AppSwapper;
