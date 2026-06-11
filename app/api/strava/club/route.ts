import { NextResponse } from "next/server";
import { stravaFetch, STRAVA_CONFIG } from "@/lib/strava";
import { getValidToken } from "@/lib/token";

export async function GET() {
  const token = await getValidToken();
  if (!token) return NextResponse.json({ status: "error", message: "Not connected", data: null }, { status: 401 });
  try {
    const data = await stravaFetch(`/clubs/${STRAVA_CONFIG.clubId}`, token);
    return NextResponse.json({ status: "success", message: "OK", data });
  } catch {
    return NextResponse.json({ status: "error", message: "Failed", data: null }, { status: 500 });
  }
}
