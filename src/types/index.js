import { string, objectOf, oneOfType, arrayOf, number, shape } from 'prop-types';

export const styleType = oneOfType([
  arrayOf(objectOf(oneOfType([string, number]))),
  objectOf(oneOfType([string, number])),
]);

/*export const userType = shape({
  currentPlayingTrack: shape({
    album: shape({
      album_type: string,
      artists: artistsType,
      availableMarkets: arrayOf(string),
    }),
    artistDetails: arrayOf(string),
  }),
  profilePic: string,
  userName: string,
});*/
