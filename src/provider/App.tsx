import React, {Dispatch, SetStateAction} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {AppState, AppStateStatus} from 'react-native';

type IAppContext = {
  isConnected: boolean;
  networkType: string;
  appState: AppStateStatus;
  deviceToken: string;
  setDeviceToken: Dispatch<SetStateAction<string>>;
  deviceId: string;
  setDeviceId: Dispatch<SetStateAction<string>>;
};

export const AppContext = React.createContext<IAppContext | undefined>(
  undefined,
);

const AppProvider = (props: any) => {
  const appState = React.useRef<AppStateStatus>('active');
  const [isConnected, setIsConnected] = React.useState<boolean>(false);
  const [networkType, setNetworkType] = React.useState('');
  const [appStateVisible, setAppStateVisible] = React.useState<AppStateStatus>(
    appState.current,
  );

  const [deviceToken, setDeviceToken] = React.useState('');
  const [deviceId, setDeviceId] = React.useState('');

  const handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (
      appState.current.match(/inactive|background|unknown/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
    } else {
      console.log(nextAppState);
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  };

  React.useEffect(() => {
    NetInfo.configure({
      reachabilityTest: async response => response.status === 204,
      reachabilityLongTimeout: 60 * 1000, // 60s
      reachabilityShortTimeout: 5 * 1000, // 3
      reachabilityRequestTimeout: 15 * 1000, // 15s
    });

    const unsubscribe = NetInfo.addEventListener(state => {
      setNetworkType(state.type);
      setIsConnected(state.isConnected || false);
    });
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      unsubscribe();
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        isConnected,
        networkType,
        appState: appStateVisible,
        deviceToken,
        setDeviceToken,
        deviceId,
        setDeviceId,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useSetDeviceToken = () => {
  const context = React.useContext(AppContext);
  return context?.setDeviceToken;
};

export const useSetDeviceId = () => {
  const context = React.useContext(AppContext);
  return context?.setDeviceId;
};

export const useSelectDeviceInfo = () => {
  const context = React.useContext(AppContext);
  return [context?.deviceId, context?.deviceToken];
};
