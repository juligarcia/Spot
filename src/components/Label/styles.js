import { StyleSheet } from 'react-native';

import { useTheme } from '../../theme/ThemeProvider';

const createStyles = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: '2%',
      paddingRight: '2%',
    },
    text: {
      textAlign: 'center',
      fontSize: 20,
      color: colors.textPrimary,
    },
  });

  return { styles };
};

export default createStyles;
