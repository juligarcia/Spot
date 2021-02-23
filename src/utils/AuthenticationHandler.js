import { authorize, refresh } from 'react-native-app-auth';

class AuthenticationHandler {
  constructor() {
    this.spotifyAuthConfig = {
      clientId: 'd20272027f2f40f38748633967f94b86',
      clientSecret: '958504facf64446685f2b8e71aad72b0',
      redirectUrl: 'com.spot://oauthredirect',
      scopes: [
        'playlist-read-private',
        'playlist-modify-public',
        'playlist-modify-private',
        'user-library-read',
        'user-library-modify',
        'user-top-read',
        'user-read-currently-playing',
        'user-read-private',
        'user-modify-playback-state',
      ],
      serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/api/token',
      },
    };
  }

  async onLogin(callback) {
    try {
      const result = await authorize(this.spotifyAuthConfig);
      callback({ ...result, isSignedIn: true });
    } catch (error) {
      console.log(error);
    } 
  }

  async refreshLogin(refreshToken) {
    const result = await refresh(this.spotifyAuthConfig, {
      refreshToken: refreshToken,
    });
    return result;
  }

}

const authHandler = new AuthenticationHandler();

export default authHandler;