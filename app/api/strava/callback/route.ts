import { NextRequest, NextResponse } from "next/server";
import { exchangeToken } from "@/lib/strava";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error) return NextResponse.redirect(new URL("/?strava=denied", req.url));
  if (!code) return NextResponse.json({ error: "No code" }, { status: 400 });

  try {
    const tokenData = await exchangeToken(code);
    const cookieStore = await cookies();
    const opts = { httpOnly: true, secure: process.env.NODE_ENV === "production", path: "/" };
    cookieStore.set("strava_access_token", tokenData.access_token, { ...opts, maxAge: tokenData.expires_in });
    cookieStore.set("strava_refresh_token", tokenData.refresh_token, { ...opts, maxAge: 60 * 60 * 24 * 30 });
    cookieStore.set("strava_expires_at", String(tokenData.expires_at), { ...opts, maxAge: 60 * 60 * 24 * 30 });
    return NextResponse.redirect(new URL("/?strava=connected", req.url));
  } catch {
    return NextResponse.redirect(new URL("/?strava=error", req.url));
  }
}
