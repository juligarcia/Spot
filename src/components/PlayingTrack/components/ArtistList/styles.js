import { StyleSheet } from 'react-native';

import { scaleSize } from '../../../../utils/dimensions';
import { useTheme } from '../../../../theme/ThemeProvider';

const createStyles = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    showArtistsButton: {
      backgroundColor: colors.foreground2,
      borderRadius: 5,
    },
    showArtistsButtonText: {
      fontSize: 16,
      color: colors.textPrimary,
    },
    container: {
      backgroundColor: colors.foreground1,
      borderRadius: 5,
      width: scaleSize(90),
      padding: scaleSize(2),
      maxHeight: scaleSize(50, true),
    },
    list: {
      marginTop: scaleSize(1, true),
    }
  });

  return { colors, styles };
};

export default createStyles;
