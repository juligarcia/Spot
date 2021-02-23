export const getTopTracksInfo = (apiResponse) => {
  const { tracks } = apiResponse?.body;

  return tracks.map(({ album, name, external_urls: url, id, uri }) => ({
    trackPic: album?.images[0]?.url,
    name,
    url: url.spotify,
    uri,
  }));
};
