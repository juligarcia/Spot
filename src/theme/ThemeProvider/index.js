/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useState, useEffect, useContext } from 'react';
import { Appearance, AppearanceProvider } from 'react-native-appearance';
import { node } from 'prop-types';

import { lightColors, darkColors } from './colorThemes';

const ThemeContext = createContext({
  isDark: false,
  colors: lightColors,
  setScheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [scheme, setColorScheme] = useState(Appearance.getColorScheme());
  const [isDark, setIsDark] = useState(scheme === 'dark');

  useEffect(() => {
    setColorScheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDark(colorScheme === 'dark');
    });
    return () => subscription.remove();
  }, []);

  const theme = {
    isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: (sch) => setIsDark(sch === 'dark'),
  };

  return (
    <AppearanceProvider>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </AppearanceProvider>
  );
};

ThemeProvider.propTypes = {
  children: node,
};

export const useTheme = () => useContext(ThemeContext);

export const withTheme = (Component) => {
  const ThemedComponent = (props) => (
    <ThemeContext.Consumer>{(theme) => <Component {...props} theme={theme} />}</ThemeContext.Consumer>
  );
  ThemedComponent.displayName = Component.displayName || 'Themed';

  return ThemedComponent;
};
