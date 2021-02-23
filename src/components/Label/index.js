import React from 'react';
import { Text, View } from 'react-native';
import { string, node, bool, oneOfType } from 'prop-types';
// import { styleType } from 'app/types';

import defaultStyles from './styles';

const Label = ({ children, containerStyles, textStyles, Icon, before, both }) => (
  <View style={[defaultStyles.container, containerStyles]}>
    {(before || both) && Icon}
    <Text style={[defaultStyles.text, textStyles]}>{children}</Text>
    {(!before || both) && Icon}
  </View>
);

Label.defaultProps = {
  before: false,
};

Label.propTypes = {
  before: bool,
  // containerStyles: styleType,
  Icon: node,
  both: bool,
  // textStyles: styleType,
  children: oneOfType([string, node]),
};

export default Label;
