const stats = [
  { num: "36", label: "Anggota Aktif" },
  { num: "2+", label: "Tahun Berdiri" },
  { num: "400K", label: "Target Journey" },
  { num: "10K", label: "Jarak Reguler" },
];

export default function StatsBar() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", background: "#fc5000" }}>
      {stats.map((s, i) => (
        <div key={i} style={{
          padding: 20, textAlign: "center",
          borderRight: i < stats.length - 1 ? "0.5px solid rgba(255,255,255,0.2)" : "none",
        }}>
          <div style={{ fontSize: 28, fontWeight: 600, color: "#fff" }}>{s.num}</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 2 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
