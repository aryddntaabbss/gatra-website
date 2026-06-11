const values = [
  { icon: "⛰️", label: "Trail Running" },
  { icon: "👥", label: "Komunitas" },
  { icon: "🌿", label: "Cinta Alam" },
  { icon: "🏆", label: "Kompetitif" },
];

import Image from "next/image";

export default function About() {
  return (
    <section id="tentang" style={{ padding: "60px 24px" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 40, alignItems: "center", maxWidth: 1000, margin: "0 auto",
      }}>
        {/* Visual */}
        <div style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: 280,
          borderRadius: 12,
          textAlign: "center", position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(26, 14, 7, 0.65)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Image
              src="/logo.png"
              alt="GATRA Logo"
              width={250}
              height={250}
              style={{ opacity: 0.30, borderRadius: 12 }}
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <div style={{ fontSize: 13, color: "#fc5000", fontWeight: 500, marginBottom: 8 }}>
            Gamalama Trail Runners
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 16 }}>
            Tentang <span style={{ color: "#fc5000" }}>GATRA</span>
          </h2>
          <p style={{ fontSize: 15, color: "#666", lineHeight: 1.8, marginBottom: 16 }}>
            GATRA adalah komunitas pelari trail yang lahir dari kecintaan terhadap alam Maluku Utara
            dengan semangat Gunung Gamalama. Kami percaya bahwa berlari bukan sekadar olahraga —
            ini tentang kebersamaan, ketangguhan, dan menghormati alam.
          </p>
          <p style={{ fontSize: 15, color: "#666", lineHeight: 1.8, marginBottom: 24 }}>
            Bergabunglah dengan kami dalam setiap latihan mingguan, event lokal, hingga
            challenge jarak jauh bersama komunitas Strava.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {values.map((v) => (
              <div key={v.label} style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "10px 14px", background: "#f5f5f5",
                borderRadius: 8, border: "0.5px solid #e5e5e5",
              }}>
                <span style={{ fontSize: 18 }}>{v.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 500 }}>{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}