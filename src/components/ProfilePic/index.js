import React from 'react';
import { Image, ActivityIndicator, View } from 'react-native';
import { string, number, bool } from 'prop-types';

import createStyles from './styles';

const ProfilePic = ({ url, size, loading }) => {
  const { styles, colors } = createStyles(size);

  return loading ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={colors.background} />
    </View>
  ) : (
    <Image source={{ uri: url }} style={styles.profilePic} />
  );
};

ProfilePic.propTypes = {
  url: string,
  size: number,
  loading: bool,
};

export default ProfilePic;
