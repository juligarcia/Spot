import React from 'react';
import { Image } from 'react-native';
import { string, number } from 'prop-types';

const ProfilePic = ({ url, size }) => (
  <Image source={{ uri: url }} style={{ width: size, height: size, borderRadius: 5 }} />
);

ProfilePic.propTypes = {
  url: string,
  size: number,
};

export default ProfilePic;
