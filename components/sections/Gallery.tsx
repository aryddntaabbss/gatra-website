const items = [
  { bg: "linear-gradient(135deg,#1a0e07,#993C1D)", icon: "⛰️", label: "Puncak Gamalama", tall: true },
  { bg: "linear-gradient(135deg,#0f3d1a,#639922)", icon: "🌲", label: "Jalur Hutan" },
  { bg: "linear-gradient(135deg,#042C53,#378ADD)", icon: "🌊", label: "Pantai Ternate" },
  { bg: "linear-gradient(135deg,#1a0e07,#D85A30,#EF9F27)", icon: "👥", label: "Latihan Bersama", wide: true },
  { bg: "linear-gradient(135deg,#26215C,#7F77DD)", icon: "🏅", label: "Finish Line" },
];

export default function Gallery() {
  return (
    <section id="galeri" style={{ padding: "60px 32px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 6 }}>Galeri</h2>
        <p style={{ fontSize: 15, color: "#666", marginBottom: 32 }}>Momen bersama di jalur dan alam Ternate</p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto",
          gap: 12,
        }}>
          {items.map((item, i) => (
            <div key={i} style={{
              background: item.bg,
              borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              minHeight: item.tall ? 280 : 140,
              gridRow: item.tall ? "span 2" : "span 1",
              gridColumn: item.wide ? "span 2" : "span 1",
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: item.tall ? 48 : 36 }}>{item.icon}</div>
                <div style={{ fontSize: 12, color: "#fff", marginTop: 8, opacity: 0.9 }}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
