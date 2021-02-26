import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Bar } from 'react-native-progress';

import Label from '../../../Label';
import { scaleSize } from '../../../../utils/dimensions';

import { getFormattedTrackFeatures } from './utils';
import createStyles from './styles';

const trackFeatures = ({ trackFeatures = {} }) => {
  const features = getFormattedTrackFeatures(trackFeatures);
  const { styles, colors } = createStyles();
  const { featureColors } = colors;

  return (
    <View style={styles.container}>
      {features.map(({ label, value }, index) => (
        <View key={index} style={[styles.feature, index && styles.featureMargin]}>
          <Label textStyles={{ color: featureColors[label], fontSize: 18 }}>{`${label} - ${Math.floor(value * 100)}%`}</Label>
          <Bar
            progress={value}
            color={featureColors[label]}
            width={scaleSize(50)}
            unfilledColor={colors.foreground1}
          />
        </View>
      ))}
    </View>
  );
};

const mapStateToProps = (store) => ({
  trackFeatures: store?.user?.currentPlayingTrack?.trackFeatures,
});

export default connect(mapStateToProps)(trackFeatures);
