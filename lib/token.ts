import { cookies } from "next/headers";
import { refreshAccessToken } from "./strava";

export async function getValidToken(): Promise<string | null> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("strava_access_token")?.value;
  const refreshToken = cookieStore.get("strava_refresh_token")?.value;
  const expiresAt = cookieStore.get("strava_expires_at")?.value;

  if (!accessToken || !refreshToken) return null;

  const isExpired = expiresAt && Date.now() / 1000 > Number(expiresAt) - 300;
  if (isExpired) {
    try {
      const newToken = await refreshAccessToken(refreshToken);
      const cookieStore2 = await cookies();
      cookieStore2.set("strava_access_token", newToken.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: newToken.expires_in,
        path: "/",
      });
      cookieStore2.set("strava_expires_at", String(newToken.expires_at), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
      return newToken.access_token;
    } catch {
      return null;
    }
  }
  return accessToken;
}
