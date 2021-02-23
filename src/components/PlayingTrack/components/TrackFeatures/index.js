import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Bar } from 'react-native-progress';

import Label from '../../../Label';
import { scaleSize } from '../../../../utils/dimensions';

import { getFormattedTrackFeatures } from './utils';

const trackFeatures = ({ trackFeatures = {} }) => {
  const features = getFormattedTrackFeatures(trackFeatures);
  const { tempo } = trackFeatures;

  return (
    <View style={styles.container}>
      {features.map(({ label, value, color }, index) => (
        <View style={[styles.feature, index && styles.featureMargin]}>
          <Label textStyles={{ color, fontSize: 18 }}>{`${label} - ${Math.floor(value * 100)}%`}</Label>
          <Bar progress={value} color={color} width={scaleSize(50)} unfilledColor="#000" />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: scaleSize(2),
    backgroundColor: '#2E2E2E',
    padding: scaleSize(2),
    width: scaleSize(90),
    borderRadius: 5,
  },
  featureMargin: {
    marginTop: scaleSize(2),
  },
  feature: {
    backgroundColor: '#3B3B3B',
    borderRadius: 5,
    padding: scaleSize(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5E5E5E',
  }
});

const mapStateToProps = (store) => ({
  trackFeatures: store?.user?.currentPlayingTrack?.trackFeatures,
});

export default connect(mapStateToProps)(trackFeatures);
