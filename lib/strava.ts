export const STRAVA_CONFIG = {
  clientId: process.env.STRAVA_CLIENT_ID!,
  clientSecret: process.env.STRAVA_CLIENT_SECRET!,
  redirectUri: process.env.STRAVA_REDIRECT_URI!,
  clubId: process.env.STRAVA_CLUB_ID!,
  baseUrl: "https://www.strava.com/api/v3",
  oauthUrl: "https://www.strava.com/oauth",
};

export function getStravaAuthUrl(): string {
  const params = new URLSearchParams({
    client_id: STRAVA_CONFIG.clientId,
    redirect_uri: STRAVA_CONFIG.redirectUri,
    response_type: "code",
    approval_prompt: "auto",
    scope: "read,activity:read_all,profile:read_all",
  });
  return `${STRAVA_CONFIG.oauthUrl}/authorize?${params.toString()}`;
}

export async function exchangeToken(code: string) {
  const res = await fetch(`${STRAVA_CONFIG.oauthUrl}/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: STRAVA_CONFIG.clientId,
      client_secret: STRAVA_CONFIG.clientSecret,
      code,
      grant_type: "authorization_code",
    }),
  });
  if (!res.ok) throw new Error(`Token exchange failed: ${res.statusText}`);
  return res.json();
}

export async function refreshAccessToken(refreshTokenStr: string) {
  const res = await fetch(`${STRAVA_CONFIG.oauthUrl}/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: STRAVA_CONFIG.clientId,
      client_secret: STRAVA_CONFIG.clientSecret,
      refresh_token: refreshTokenStr,
      grant_type: "refresh_token",
    }),
  });
  if (!res.ok) throw new Error(`Token refresh failed: ${res.statusText}`);
  return res.json();
}

export async function stravaFetch(endpoint: string, accessToken: string) {
  const res = await fetch(`${STRAVA_CONFIG.baseUrl}${endpoint}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`Strava API error: ${res.statusText}`);
  return res.json();
}
