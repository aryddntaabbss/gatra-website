"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      borderBottom: "0.5px solid #e5e5e5",
      background: "#fff", position: "sticky", top: 0, zIndex: 50,
    }}>
      {/* Main bar */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "16px 32px",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src="/main-logo.png" width={28} height={28} alt="GATRA Logo" />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
            <span style={{ color: "#fc5000", fontWeight: 700, fontSize: 16 }}>GATRA</span>
            <span style={{ color: "#666", fontWeight: 400, fontSize: 12 }}>Gamalama Trail Runners</span>
          </div>
        </div>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 24 }} className="hidden-mobile">
          {["Tentang", "Event", "Galeri", "Anggota"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              fontSize: 14, color: "#666", textDecoration: "none", cursor: "pointer",
            }}>{item}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="/api/strava/auth" style={{
          background: "#fc5000", color: "#fff", border: "none",
          padding: "8px 20px", borderRadius: 8, fontSize: 14,
          fontWeight: 500, cursor: "pointer", textDecoration: "none",
          display: "inline-block",
        }} className="hidden-mobile">
          Connect Strava
        </a>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "none", flexDirection: "column", gap: 5, padding: 4,
          }}
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: 22, height: 2, background: menuOpen ? "#fc5000" : "#333", transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#333", transition: "all 0.2s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 22, height: 2, background: menuOpen ? "#fc5000" : "#333", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="show-mobile" style={{
          display: "flex", flexDirection: "column",
          borderTop: "0.5px solid #e5e5e5", padding: "12px 32px 20px",
          gap: 16,
        }}>
          {["Tentang", "Event", "Galeri", "Anggota"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 15, color: "#333", textDecoration: "none" }}>
              {item}
            </a>
          ))}
          <a href="/api/strava/auth" style={{
            background: "#fc5000", color: "#fff",
            padding: "10px 20px", borderRadius: 8, fontSize: 14,
            fontWeight: 500, textDecoration: "none", textAlign: "center",
          }}>
            Connect Strava
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}