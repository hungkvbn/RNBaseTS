/* eslint-disable no-console */
import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

declare global {
  interface Console {
    tron: any;
  }
}
const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];
const reactotron = Reactotron.configure({
  name: 'SportPartner',
  host,
  port: 9090,
})
  .useReactNative({})
  .use(reactotronRedux())
  .connect();
// Let's clear Reactotron on every time we load the app
if (reactotron) {
  reactotron.clear;
  console.tron = reactotron;
}

export default reactotron;
