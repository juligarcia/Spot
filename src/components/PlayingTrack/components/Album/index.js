import React from 'react';
import { View, StyleSheet } from 'react-native';

import ProfilePic from '../../../ProfilePic';

const Album = ({ album }) => (
  <View>
    <ProfilePic url={album.albumPic} size={100} />
  </View>
);

export default Album;
