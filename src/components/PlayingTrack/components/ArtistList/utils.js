export const getArtistsDetails = (apiResponse) => {
  const { artists } = apiResponse?.body;
  return artists.map(({ images, name, id, popularity }) => ({
    profilePic: images[0].url,
    name,
    id,
    popularity,
  }));
};
