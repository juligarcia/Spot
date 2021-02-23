import React from 'react';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import { ThemeProvider } from './src/theme/ThemeProvider';
import MainScreen from './src/screens/MainScreen';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainScreen />
      </ThemeProvider>
    </Provider>
  );
};
export default App;
