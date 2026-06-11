"use client";

import { useEffect, useState } from "react";

const staticEvents = [
  { day: "11", month: "Jun", name: "400K Journey", type: "10.000 M Challenge", time: "15:40 WITA", location: "Ternate", distance: "Daily", tag: "Aktif" },
  { day: "15", month: "Jun", name: "Latihan Sabtu", type: "Long Run Bersama", time: "05:30 WITA", location: "Bastiong, Ternate", distance: "15–20 km", tag: "Latihan" },
  { day: "22", month: "Jun", name: "Trail Gamalama", type: "Explorasi Jalur Baru", time: "05:00 WITA", location: "Lereng Gamalama", distance: "8–12 km", tag: "Trail" },
];

export default function Events() {
  return (
    <section id="event" style={{ padding: "60px 32px", background: "#f9f9f9" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 6 }}>Event & Jadwal</h2>
        <p style={{ fontSize: 15, color: "#666", marginBottom: 32 }}>Kegiatan rutin dan challenge komunitas</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {staticEvents.map((e, i) => (
            <div key={i} style={{
              background: "#fff", border: "0.5px solid #e5e5e5",
              borderRadius: 12, overflow: "hidden",
            }}>
              <div style={{ background: "#1a0e07", padding: 20, display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  background: "#D85A30", borderRadius: 8, padding: "8px 12px",
                  textAlign: "center", minWidth: 50,
                }}>
                  <div style={{ fontSize: 20, fontWeight: 600, color: "#fff", lineHeight: 1 }}>{e.day}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", textTransform: "uppercase" as const }}>{e.month}</div>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#fff" }}>{e.name}</div>
                  <div style={{ fontSize: 12, color: "#B4B2A9", marginTop: 2 }}>{e.type}</div>
                </div>
              </div>
              <div style={{ padding: "14px 16px" }}>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
                  {[
                    { label: `⏰ ${e.time}` },
                    { label: `📍 ${e.location}` },
                    { label: `🏃 ${e.distance}` },
                  ].map((row, j) => (
                    <div key={j} style={{ fontSize: 13, color: "#555" }}>{row.label}</div>
                  ))}
                </div>
                <span style={{
                  display: "inline-block", background: "#FAECE7", color: "#993C1D",
                  fontSize: 11, padding: "3px 10px", borderRadius: 20, marginTop: 8,
                }}>
                  {e.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
