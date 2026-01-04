const API_BASE = "https://song-resolver-api.gabrielges.workers.dev";

export async function resolveSong(spotifyUrl) {
  if (!spotifyUrl) {
    throw new Error("spotifyUrl is required");
  }

  const res = await fetch(
    `${API_BASE}/resolve?spotify_url=${encodeURIComponent(spotifyUrl)}`
  );

  if (!res.ok) {
    throw new Error("Failed to resolve song");
  }

  return res.json();
}
