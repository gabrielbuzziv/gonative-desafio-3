import React from 'react';
import { Provider } from 'react-redux';

import 'config/ReactotronConfig';
import 'config/IgnoreWarnings';
import store from 'store';

import Map from 'pages/map';

const App = () => (
  <Provider store={store}>
    <Map />
  </Provider>
);

export default App;
