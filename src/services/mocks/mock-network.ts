export function enableMocking() {
  require('./polyfills/msw.polyfills');
  const { server } = require('./server');
  server.listen();
}
