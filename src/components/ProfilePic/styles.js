import { StyleSheet } from 'react-native';

import { useTheme } from '../../theme/ThemeProvider';

const createStyles = (size) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    loadingContainer: {
      width: size,
      height: size,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.foreground2,
    },
    profilePic: { width: size, height: size, borderRadius: 5 },
  });

  return { styles, colors };
};

export default createStyles;
