import SpotifyApi from '../../../../utils/SpotifyApi';

export const skipForward = () => SpotifyApi.skipToNext().catch((error) => console.log(error));

export const skipBack = () => SpotifyApi.skipToPrevious().catch((error) => console.log(error));
