import { StyleSheet } from 'react-native';

import { scaleSize } from '../../../../../../utils/dimensions';
import { useTheme } from '../../../../../../theme/ThemeProvider';

const createStyles = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.foreground2,
      padding: scaleSize(2),
      borderRadius: 5,
    },
    containerMargin: {
      marginTop: scaleSize(2),
    },
    textCenter: {
      textAlign: 'center',
    },
    artistInfo: {
      flex: 1,
      marginLeft: scaleSize(2),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return { styles };
};

export default createStyles;
