import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Button from '../../../Button';
import { withTheme } from '../../../../theme/ThemeProvider';

import createStyles from './styles';
import { skipBack, skipForward } from './utils';

const SkipButtons = ({ theme }) => {
  const { colors } = theme;
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Button onPress={skipBack} containerStyles={styles.button}>
        <Icon name="stepbackward" color={colors.textPrimary} size={15} />
      </Button>
      <Button onPress={skipForward} containerStyles={styles.button}>
        <Icon name="stepforward" color={colors.textPrimary} size={15} />
      </Button>
    </View>
  );
};

export default withTheme(SkipButtons);
