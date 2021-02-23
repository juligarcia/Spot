import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

import Label from '../../../../../Label';
import ProfilePic from '../../../../../ProfilePic';
import { scaleSize } from '../../../../../../utils/dimensions';

const Artist = ({ artist, setSelectedId, withMargin }) => {
  const { name, profilePic, id } = artist;

  return (
    <Pressable onPress={() => setSelectedId(id)}>
      <View style={[styles.container, withMargin && styles.containerMargin]}>
        <ProfilePic url={profilePic} size={70} />
        <View style={styles.artistInfo}>
          <Label textStyles={styles.textCenter}>{name}</Label>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3B3B3B',
    padding: scaleSize(2),
    borderRadius: 5,
  },
  containerMargin: {
    marginTop: scaleSize(2),
  },
  textCenter: {
    textAlign: 'center',
  },
  artistInfo: {
    flex: 1,
    marginLeft: scaleSize(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Artist;
