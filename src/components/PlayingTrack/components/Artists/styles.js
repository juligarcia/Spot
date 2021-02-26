import { StyleSheet } from 'react-native';

import { useTheme } from '../../../../theme/ThemeProvider';

const createStyles = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginBottom: 10,
      flexWrap: 'wrap',
    },
    mainArtist: {
      color: colors.spotifyColors.accentColor,
      fontSize: 15,
    },
    featArtist: {
      color: colors.textSecondary,
      fontSize: 12,
    },
  });

  return { styles, colors };
};

export default createStyles;
