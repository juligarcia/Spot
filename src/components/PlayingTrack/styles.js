import { StyleSheet } from 'react-native';

import { scaleSize } from '../../utils/dimensions';
import { useTheme } from '../../theme/ThemeProvider';

const createStyles = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
    },
    currentTrack: {
      margin: scaleSize(2),
      flexDirection: 'row',
      width: scaleSize(90),
      alignItems: 'center',
      padding: scaleSize(2),
      borderRadius: 5,
      backgroundColor: colors.foreground1,
    },
    textCenter: {
      textAlign: 'center',
    },
    trackInfo: {
      alignItems: 'center',
      flex: 1,
      marginLeft: scaleSize(2),
    },
    artists: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  return { styles, colors };
};

export default createStyles;
