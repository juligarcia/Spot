import React from 'react';
import { View, Pressable } from 'react-native';

import Label from '../../../../../Label';
import ProfilePic from '../../../../../ProfilePic';

import createStyles from './styles';

const Artist = ({ artist, setSelectedId, withMargin, loading }) => {
  const { name, profilePic, id } = artist;
  const { styles } = createStyles();

  return (
    <Pressable onPress={() => setSelectedId(id)}>
      <View style={[styles.container, withMargin && styles.containerMargin]}>
        <ProfilePic url={profilePic} size={70} loading={loading} />
        <View style={styles.artistInfo}>
          <Label textStyles={styles.textCenter}>{name}</Label>
        </View>
      </View>
    </Pressable>
  );
};

export default Artist;
