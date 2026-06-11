import { NextRequest, NextResponse } from "next/server";
import { stravaFetch, STRAVA_CONFIG } from "@/lib/strava";
import { getValidToken } from "@/lib/token";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const token = await getValidToken();
  if (!token) return NextResponse.json({ status: "error", message: "Not connected", data: null }, { status: 401 });
  try {
    const data = await stravaFetch(`/clubs/${STRAVA_CONFIG.clubId}/members?page=${page}&per_page=30`, token);
    return NextResponse.json({ status: "success", message: `${data.length} members`, data });
  } catch {
    return NextResponse.json({ status: "error", message: "Failed", data: null }, { status: 500 });
  }
}
