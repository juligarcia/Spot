import React from 'react';
import { View, Pressable } from 'react-native';
import { string, func, node, bool } from 'prop-types';

import Label from '../Label';

import defaultStyles from './styles';

const Button = ({ textStyles, containerStyles, onPress, text, children, setRef, Icon, before }) => (
  <View ref={setRef} style={[defaultStyles.container, containerStyles]}>
    <Pressable style={{ width: '100%', justifyContent: 'center', alignContent: 'center' }} onPress={onPress}>
      {!text ? (
        children
      ) : (
        <Label Icon={Icon} before={before} textStyles={[defaultStyles.label, textStyles]}>
          {text}
        </Label>
      )}
    </Pressable>
  </View>
);

Button.propTypes = {
  // containerStyles: styleType,
  // textStyles: styleType,
  onPress: func.isRequired,
  text: string,
  children: node,
  setRef: func,
  before: bool,
  Icon: node,
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
