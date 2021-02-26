import { StyleSheet } from 'react-native';

import { useTheme } from '../../theme/ThemeProvider';

const createStyles = () => {
  const { colors } = useTheme();
  const { spotifyColors } = colors;

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: spotifyColors.accentColor,
      paddingBottom: '2%',
      paddingTop: '2%',
      paddingLeft: '5%',
      paddingRight: '5%',
    },
    label: {
      width: '100%',
      color: spotifyColors.textColor,
    },
  });

  return { styles };
};

export default createStyles;
