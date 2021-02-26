import { StyleSheet } from 'react-native';

import { useTheme } from '../../../theme/ThemeProvider';

const createStyles = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: '60%',
    },
    buttonLabel: {
      width: '100%',
      color: colors.spotifyColors.textColor,
    },
    title: {
      fontSize: 120,
    },
    titleContainer: {
      marginBottom: '15%',
    },
  });

  return {
    colors,
    styles,
  };
};

export default createStyles;
