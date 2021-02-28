import { StyleSheet } from 'react-native';

import { scaleSize } from '../../../../utils/dimensions';

const createStyles = (theme) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    button: {
      marginLeft: scaleSize(5),
      marginRight: scaleSize(5),
      marginTop: scaleSize(1, 'H'),
      borderRadius: 0,
      backgroundColor: colors.foreground2,
    },
  });
  return styles;
};

export default createStyles;
