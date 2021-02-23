export const getUserData = (apiResponse) => ({
  profilePic: apiResponse?.body?.images[0]?.url,
  userName: apiResponse?.body?.display_name,
});

export const getTrackData = (apiResponse) => {
  if (!apiResponse?.body) return {};

  const { item, progress_ms: progress, is_playing: isPlaying } = apiResponse?.body;
  const {
    album,
    artists,
    duration_ms: duration,
    name,
    explicit,
    preview_url: previewUrl,
    id: trackId,
  } = item;

  return {
    progress,
    duration,
    artists,
    name,
    explicit,
    previewUrl,
    album,
    trackId,
    isPlaying,
  };
};
