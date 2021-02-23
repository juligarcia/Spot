export const getAlbumData = (albumData) => ({
  albumName: albumData?.name,
  albumPic: albumData?.images[0].url,
});

export const getTrackFeatures = (apiResponse) => {
  const {
    acousticness,
    danceability,
    energy,
    instrumentalness,
    liveness,
    speechiness,
    tempo,
  } = apiResponse?.body;

  return {
    acousticness,
    danceability,
    energy,
    instrumentalness,
    liveness,
    speechiness,
    tempo,
  };
};
