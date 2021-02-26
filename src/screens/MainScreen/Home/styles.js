import { StyleSheet } from 'react-native';

import { useTheme } from '../../../theme/ThemeProvider';
import { scaleSize } from '../../../utils/dimensions';

const createStyles = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      alignItems: 'center',
      height: '100%',
      padding: scaleSize(5),
    },
    me: {
      flexDirection: 'row',
      backgroundColor: colors.foreground1,
      width: scaleSize(90),
      borderRadius: 5,
      padding: scaleSize(2),
    },
    userInfo: {
      margin: scaleSize(2),
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return { styles };
};

export default createStyles;
