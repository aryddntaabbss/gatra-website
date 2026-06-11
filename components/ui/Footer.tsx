import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#0f0804", padding: "40px 32px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        {/* Grid utama */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 32, marginBottom: 32,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <Image src="/main-logo.png" width={28} height={28} alt="GATRA Logo" />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                <span style={{ color: "#fc5000", fontWeight: 700, fontSize: 16 }}>GATRA</span>
                <span style={{ color: "#efefef", fontWeight: 400, fontSize: 12 }}>Gamalama Trail Runners</span>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6, maxWidth: 260 }}>
              Komunitas pelari trail dari Ternate, Maluku Utara. Bersama menaklukkan alam Gamalama.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 500, color: "#fff", marginBottom: 14, textTransform: "uppercase", letterSpacing: 0.5 }}>
              Navigasi
            </h4>
            {["Tentang Kami", "Event", "Galeri", "Anggota"].map((item) => (
              <a key={item} href="#" style={{ display: "block", fontSize: 14, color: "#888", textDecoration: "none", marginBottom: 8 }}>
                {item}
              </a>
            ))}
          </div>

          {/* Ikuti Kami */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 500, color: "#fff", marginBottom: 14, textTransform: "uppercase", letterSpacing: 0.5 }}>
              Ikuti Kami
            </h4>
            {[
              { label: "Strava Club", href: "https://www.strava.com/clubs/2169992" },
              { label: "Instagram", href: "#" },
              { label: "WhatsApp Group", href: "#" },
            ].map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "block", fontSize: 14, color: "#888", textDecoration: "none", marginBottom: 8 }}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "0.5px solid rgba(255,255,255,0.1)",
          paddingTop: 20, display: "flex",
          justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: 13, color: "#555" }}>
            © 2026 GATRA - Gamalama Trail Runners. Ternate, Maluku Utara.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            {["🧡", "📸", "💬"].map((icon, i) => (
              <div key={i} style={{
                width: 32, height: 32, borderRadius: 8,
                background: "rgba(255,255,255,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, cursor: "pointer",
              }}>
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}