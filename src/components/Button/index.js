import React from 'react';
import { View, Pressable } from 'react-native';
import { string, func, node, bool } from 'prop-types';

import { styleType } from '../../types';
import Label from '../Label';

import createStyles from './styles';

const Button = ({ textStyles, containerStyles, onPress, text, children, setRef, Icon, before, disabled }) => {
  const { styles } = createStyles();

  return (
    <View ref={setRef} style={[styles.container, containerStyles]}>
      <Pressable
        disabled={disabled}
        style={{ width: '100%', justifyContent: 'center', alignContent: 'center' }}
        onPress={onPress}
      >
        {!text ? (
          children
        ) : (
          <Label Icon={Icon} before={before} textStyles={[styles.label, textStyles]}>
            {text}
          </Label>
        )}
      </Pressable>
    </View>
  );
};

Button.propTypes = {
  containerStyles: styleType,
  textStyles: styleType,
  onPress: func.isRequired,
  text: string,
  children: node,
  setRef: func,
  before: bool,
  Icon: node,
  disabled: bool,
};

Button.defaultProps = {
  textStyles: {},
  containerStyles: {},
  children: null,
  text: undefined,
  setRef: null,
  Icon: null,
  before: false,
};

export default Button;
