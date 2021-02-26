const SpotifyWebApi = require('spotify-web-api-node');

const SpotifyApi = new SpotifyWebApi({
  clientId: 'd20272027f2f40f38748633967f94b86',
  clientSecret: '958504facf64446685f2b8e71aad72b0',
  redirectUri: 'com.spot://oauthredirect',
});

export default SpotifyApi;
