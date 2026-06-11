export default function Hero() {
  return (
    <>
      <section style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%", height: "70vh",
        minHeight: 400,
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        {/* overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #fc5000a8, rgba(26, 14, 7, 0.79))",
        }} />

        {/* konten */}
        <div style={{
          position: "relative", zIndex: 1,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          height: "100%", padding: "40px 24px",
        }}>
          <div style={{
            display: "inline-block", background: "#fc500088", color: "#F5C4B3",
            fontSize: 12, padding: "4px 14px", borderRadius: 20,
            marginBottom: 20, letterSpacing: 1, textTransform: "uppercase",
          }}>
            Ternate, Maluku Utara
          </div>

          <h1 className="hero-title" style={{
            fontWeight: 600, color: "#fff", lineHeight: 1.2, marginBottom: 12,
          }}>
            Berlari di Kaki{" "}
            <span style={{ color: "#fc5000" }}>Gamalama</span>
          </h1>

          <p style={{
            fontSize: 16, color: "#B4B2A9",
            maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.7,
          }}>
            Komunitas trail running berbasis di Ternate. Bersama menaklukkan jalur,
            membangun semangat, dan menghargai alam.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/api/strava/auth" style={{
              background: "#fc5000", color: "#fff",
              padding: "12px 28px", borderRadius: 8, fontSize: 15,
              fontWeight: 500, cursor: "pointer", textDecoration: "none", display: "inline-block",
            }}>
              Connect Strava
            </a>
            <a href="#event" style={{
              background: "transparent", color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "12px 28px", borderRadius: 8, fontSize: 15,
              cursor: "pointer", textDecoration: "none", display: "inline-block",
            }}>
              Lihat Event
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .hero-title { font-size: 42px; }
        @media (max-width: 640px) {
          .hero-title { font-size: 28px; }
        }
      `}</style>
    </>
  );
}