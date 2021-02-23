import { StyleSheet } from 'react-native';

// import { useTheme } from '../../../theme/ThemeProvider';

const createStyles = () => {
  // const { colors } = useTheme();

  return {
    styles: StyleSheet.create({
      container: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        width: '40%',
      },
      title: {
        fontSize: 120,
      },
      titleContainer: {
        marginBottom: '15%',
      },
    }),
  };
};

export default createStyles;
