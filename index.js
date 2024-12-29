/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './Root';
import {name as appName} from './app.json';

function enableMocking() {
  if (!__DEV__) {
    return;
  }

  require('./polyfills/msw.polyfills');
  const {server} = require('./src/services/mocks/server');
  server.listen();
}

enableMocking();

AppRegistry.registerComponent(appName, () => App);
