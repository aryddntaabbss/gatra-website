"use client";

import { useEffect, useState } from "react";

interface Activity {
  id: number;
  name: string;
  athlete: { id: number; firstname: string; lastname: string };
  sport_type: string;
  distance: number;
  moving_time: number;
  total_elevation_gain: number;
  start_date_local: string;
  kudos_count: number;
}

function fmtDist(m: number) { return (m / 1000).toFixed(1) + " km"; }
function fmtTime(s: number) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  return h > 0 ? `${h}j ${m}m` : `${m}m`;
}
function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "short" });
}

export default function Activities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    fetch("/api/strava/activities")
      .then((r) => r.json())
      .then((json) => {
        if (json.status === "success") {
          setActivities(json.data);
          setConnected(true);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (!connected && !loading) return null;

  return (
    <section style={{ padding: "60px 32px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 6 }}>Aktivitas Terbaru</h2>
        <p style={{ fontSize: 15, color: "#666", marginBottom: 32 }}>Rekap aktivitas anggota GATRA dari Strava</p>

        {loading ? (
          <div style={{ color: "#888", fontSize: 14 }}>Memuat data Strava...</div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
            {activities.slice(0, 10).map((a) => (
              <div key={a.id} style={{
                background: "#fff", border: "0.5px solid #e5e5e5",
                borderRadius: 12, padding: "16px 20px",
                display: "flex", justifyContent: "space-between",
                alignItems: "center", flexWrap: "wrap" as const, gap: 12,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "#FAECE7", color: "#D85A30",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 600,
                  }}>
                    {a.athlete.firstname?.[0]}{a.athlete.lastname?.[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{a.name}</div>
                    <div style={{ fontSize: 12, color: "#888" }}>
                      {a.athlete.firstname} {a.athlete.lastname} · {fmtDate(a.start_date_local)}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 20 }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "#D85A30" }}>{fmtDist(a.distance)}</div>
                    <div style={{ fontSize: 11, color: "#888" }}>Jarak</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 16, fontWeight: 600 }}>{fmtTime(a.moving_time)}</div>
                    <div style={{ fontSize: 11, color: "#888" }}>Waktu</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 16, fontWeight: 600 }}>{Math.round(a.total_elevation_gain)}m</div>
                    <div style={{ fontSize: 11, color: "#888" }}>Elevasi</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 16, fontWeight: 600 }}>{a.kudos_count}</div>
                    <div style={{ fontSize: 11, color: "#888" }}>Kudos</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
