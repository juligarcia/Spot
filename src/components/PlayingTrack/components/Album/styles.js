import { StyleSheet } from 'react-native';

import { useTheme } from '../../../../theme/ThemeProvider';

const createStyles = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.foreground2,
      width: 100,
      height: 100,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return { styles, colors };
};

export default createStyles;
