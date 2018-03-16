import React from 'react';
import { Provider } from 'react-redux';

import 'config/ReactotronConfig';
import 'config/IgnoreWarnings';

import Map from 'pages/map';

const App = () => (
  <Provider>
    <Map />
  </Provider>
);

export default App;
