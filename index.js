/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './Root';
import {name as appName} from './app.json';
import {enableMocking} from './src/services/mocks/mock-network';

if (__DEV__) {
  enableMocking();
}

AppRegistry.registerComponent(appName, () => App);
