import { StyleSheet } from 'react-native';

import { scaleSize } from '../../../../../../utils/dimensions';
import { useTheme } from '../../../../../../theme/ThemeProvider';

const createStyles = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    songName: {
      textAlign: 'center',
      fontSize: 16,
    },
    dragBar: {
      width: '70%',
      height: scaleSize(1, true),
      borderRadius: 100,
      backgroundColor: colors.foreground2,
      marginBottom: scaleSize(2, true),
    },
    container: {
      backgroundColor: colors.foreground1,
      height: scaleSize(80, true),
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      paddingTop: '5%',
      paddingBottom: '5%',
      alignItems: 'center',
      width: '100%',
    },
    trackInfo: {
      flex: 1,
      alignItems: 'center',
      margin: scaleSize(2),
    },
    track: {
      alignItems: 'center',
      width: '100%',
      backgroundColor: colors.foreground2,
      borderRadius: 5,
      marginBottom: scaleSize(2),
      padding: scaleSize(2),
      flexDirection: 'row',
    },
    innerContainer: {
      width: '90%',
    },
  });

  return { styles, colors };
};

export default createStyles;
