export default function StravaConnect() {
  return (
    <section style={{
      background: "#FC4C02", padding: "48px 32px",
      display: "flex", alignItems: "center",
      justifyContent: "space-between", flexWrap: "wrap" as const, gap: 20,
    }}>
      <div style={{ maxWidth: 500 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, color: "#fff", marginBottom: 8 }}>
          Terhubung di Strava
        </h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)" }}>
          Ikuti aktivitas komunitas, lihat leaderboard mingguan, dan bergabung
          dalam event challenge bersama 36 anggota GATRA.
        </p>
        <div style={{ display: "flex", gap: 24, marginTop: 20, flexWrap: "wrap" as const }}>
          {[
            { num: "36", label: "Anggota Strava" },
            { num: "400K", label: "Journey Target" },
            { num: "Daily", label: "Event Aktif" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 24, fontWeight: 600, color: "#fff" }}>{s.num}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <a href="/api/strava/auth" style={{
        display: "flex", alignItems: "center", gap: 10,
        background: "#fff", color: "#FC4C02",
        padding: "12px 24px", borderRadius: 8,
        fontSize: 15, fontWeight: 500, textDecoration: "none",
        whiteSpace: "nowrap" as const,
      }}>
        🚴 Lihat di Strava
      </a>
    </section>
  );
}
