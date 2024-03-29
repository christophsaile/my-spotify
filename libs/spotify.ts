export type TimeRange = 'long_term' | 'medium_term' | 'short_term';

const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token || '',
    }),
  });

  return response.json();
};

export const myProfile = async () => {
	const { access_token } = await getAccessToken();

	return fetch('https://api.spotify.com/v1/me', {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
}

export const myAlbums = async (offset: number, limit: number) => {
  const { access_token } = await getAccessToken();

  return fetch(`https://api.spotify.com/v1/me/albums?offset=${offset}&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const myTopArtists = async (timeRange: TimeRange) => {
  const { access_token } = await getAccessToken();

  return fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=10&offset=0`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const myTopTracks = async (timeRange: TimeRange) => {
  const { access_token } = await getAccessToken();

  return fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=10&offset=0`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const myPlaylists = async () => {
  const { access_token } = await getAccessToken();

  return fetch('https://api.spotify.com/v1/me/playlists?&offset=0', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const currentlyPlayingSong = async () => {
  const { access_token } = await getAccessToken();

  return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
