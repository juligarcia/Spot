export const getFormattedTrackFeatures = (trackFeatures) => {
  const { acousticness, danceability, energy, liveness, speechiness } = trackFeatures;

  return [
    { label: 'Acousticness', value: acousticness, color: '#31A7DF' },
    { label: 'Danceability', value: danceability, color: '#D13897' },
    { label: 'Energy', value: energy, color: '#E4DE2A' },
    { label: 'Liveness', value: liveness, color: '#38D16B' },
    { label: 'Speechiness', value: speechiness, color: '#E4872A' },
  ];
};
