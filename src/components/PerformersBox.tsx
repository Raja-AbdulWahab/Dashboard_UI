// src/components/PerformersBox.tsx
"use client";

import React from "react";

function PerformerCard({ label, name, percent, color }: { label: string; name: string; percent: number; color: string; }) {
  return (
    <div className="performer-card fade-in-up">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        {/* donut placeholder */}
        <div className="donut" style={{ border: `6px solid ${color}22` }}>
          <div style={{ fontSize: 14, color }}>{Math.round(percent)}%</div>
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, color: "#172B4D", marginBottom: 6 }}>{label}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ height: 34, width: 34, borderRadius: 999, background: "#e9f6ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#0f79b8", fontWeight: 700 }}>
            {/* avatar initials */}
            SH
          </div>
          <div style={{ fontWeight: 600 }}>{name}</div>
        </div>
      </div>
    </div>
  );
}

export default function PerformersBox() {
  return (
    <>
      <PerformerCard label="Top Performer" name="Shahvez Hassan" percent={83} color="#1f9f5f" />
      <PerformerCard label="Low Performer" name="Ahmed Hanif" percent={54} color="#2f86d0" />
    </>
  );
}
