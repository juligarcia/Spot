import { StyleSheet } from 'react-native';

import { scaleSize } from '../../../../utils/dimensions';
import { useTheme } from '../../../../theme/ThemeProvider';

const createStyles = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginTop: scaleSize(2),
      backgroundColor: colors.foreground1,
      padding: scaleSize(2),
      width: scaleSize(90),
      borderRadius: 5,
    },
    featureMargin: {
      marginTop: scaleSize(2),
    },
    feature: {
      backgroundColor: colors.foreground2,
      borderRadius: 5,
      padding: scaleSize(2),
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.borderLight,
    },
  });

  return { styles, colors };
};

export default createStyles;
