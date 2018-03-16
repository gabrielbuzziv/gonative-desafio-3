import React from 'react';
import 'config/ReactotronConfig';
import 'config/IgnoreWarnings';

import { View } from 'react-native';

import Map from 'pages/map';

const App = () => (
  <View>
    <Map />
  </View>
);

export default App;
