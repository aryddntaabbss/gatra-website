"use client";

import { useEffect, useState } from "react";
import type { StravaMember } from "@/types/strava";

const colors = ["#FAECE7", "#EAF3DE", "#E6F1FB", "#EEEDFE", "#E1F5EE", "#FAEEDA"];
const textColors = ["#993C1D", "#3B6D11", "#185FA5", "#534AB7", "#0F6E56", "#854F0B"];

function getInitials(firstname: string, lastname: string) {
  return `${firstname[0] || ""}${lastname[0] || ""}`.toUpperCase();
}

export default function Members() {
  const [members, setMembers] = useState<StravaMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    fetch("/api/strava/members")
      .then((r) => r.json())
      .then((json) => {
        if (json.status === "success") {
          setMembers(json.data);
          setConnected(true);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="anggota" style={{ padding: "60px 32px", background: "#f9f9f9" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32, flexWrap: "wrap" as const, gap: 12 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 4 }}>Anggota Komunitas</h2>
            <p style={{ fontSize: 15, color: "#666" }}>
              {connected ? `${members.length} pelari aktif` : "36 pelari aktif dari Ternate dan sekitarnya"}
            </p>
          </div>
          {!connected && (
            <a href="/api/strava/auth" style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "#FC4C02", color: "#fff", textDecoration: "none",
              padding: "8px 16px", borderRadius: 8, fontSize: 14, fontWeight: 500,
            }}>
              <span>Connect Strava untuk lihat anggota</span>
            </a>
          )}
        </div>

        {loading ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
            {[...Array(6)].map((_, i) => (
              <div key={i} style={{
                background: "#fff", border: "0.5px solid #e5e5e5",
                borderRadius: 12, padding: 20, textAlign: "center",
              }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#f0f0f0", margin: "0 auto 12px" }}/>
                <div style={{ height: 14, background: "#f0f0f0", borderRadius: 4, marginBottom: 6 }}/>
                <div style={{ height: 12, background: "#f5f5f5", borderRadius: 4, width: "60%", margin: "0 auto" }}/>
              </div>
            ))}
          </div>
        ) : connected && members.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
            {members.map((m, i) => {
              const ci = i % colors.length;
              return (
                <div key={m.id} style={{
                  background: "#fff", border: "0.5px solid #e5e5e5",
                  borderRadius: 12, padding: "20px 16px", textAlign: "center",
                }}>
                  {m.profile_medium && !m.profile_medium.includes("avatar") ? (
                    <img
                      src={m.profile_medium}
                      alt={m.firstname}
                      style={{ width: 52, height: 52, borderRadius: "50%", margin: "0 auto 12px", display: "block", objectFit: "cover" }}
                    />
                  ) : (
                    <div style={{
                      width: 52, height: 52, borderRadius: "50%",
                      background: colors[ci], color: textColors[ci],
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 18, fontWeight: 500, margin: "0 auto 12px",
                    }}>
                      {getInitials(m.firstname, m.lastname)}
                    </div>
                  )}
                  <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 2 }}>
                    {m.firstname} {m.lastname}
                  </div>
                  <div style={{ fontSize: 12, color: "#888" }}>{m.city || "Ternate"}</div>
                  {m.admin && (
                    <span style={{
                      display: "inline-block", marginTop: 8,
                      background: "#FAECE7", color: "#993C1D",
                      fontSize: 11, padding: "2px 10px", borderRadius: 20,
                    }}>Admin</span>
                  )}
                  {m.premium && !m.admin && (
                    <span style={{
                      display: "inline-block", marginTop: 8,
                      background: "#EEEDFE", color: "#534AB7",
                      fontSize: 11, padding: "2px 10px", borderRadius: 20,
                    }}>Summit</span>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          // Placeholder cards jika belum connect
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
            {[
              { init: "RK", name: "Reza K.", role: "Founder", badge: "Ketua", ci: 0 },
              { init: "AM", name: "Andi M.", role: "Pace Setter", badge: "Pemandu", ci: 1 },
              { init: "SR", name: "Siti R.", role: "Trail Runner", badge: "Anggota", ci: 2 },
              { init: "HN", name: "Haris N.", role: "Ultra Runner", badge: "Elite", ci: 3 },
            ].map((m) => (
              <div key={m.init} style={{
                background: "#fff", border: "0.5px solid #e5e5e5",
                borderRadius: 12, padding: "20px 16px", textAlign: "center",
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: colors[m.ci], color: textColors[m.ci],
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, fontWeight: 500, margin: "0 auto 12px",
                }}>
                  {m.init}
                </div>
                <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 2 }}>{m.name}</div>
                <div style={{ fontSize: 12, color: "#888" }}>{m.role}</div>
                <span style={{
                  display: "inline-block", marginTop: 8,
                  background: colors[m.ci], color: textColors[m.ci],
                  fontSize: 11, padding: "2px 10px", borderRadius: 20,
                }}>{m.badge}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
