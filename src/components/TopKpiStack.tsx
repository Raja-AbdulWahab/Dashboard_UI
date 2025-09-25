// src/components/TopKpiStack.tsx
"use client";

import React from "react";
import { Phone, Clock } from "lucide-react";

export default function TopKpiStack() {
  return (
    <>
      {/* Card 1: Number of Calls */}
      <div className="kpi-card fade-in-up">
        <div className="kpi-icon">
          <Phone size={22} color="#0f79b8" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 13, color: "#172B4D", fontWeight: 600 }}>Number of Calls</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <div className="kpi-value">17,056</div>
            <div style={{ color: "var(--muted)", fontSize: 12 }}>Total Calls</div>
          </div>
        </div>
      </div>

      {/* Card 2: Avg Scores */}
      <div className="kpi-card fade-in-up">
        <div className="kpi-icon">
          {/* use a simple svg or icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="#0f79b8" strokeWidth="1.6"/></svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 13, color: "#172B4D", fontWeight: 600 }}>Avg Scores</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "var(--accent-blue)" }}>79.02%</div>
        </div>
      </div>

      {/* Card 3: Avg Call Time */}
      <div className="kpi-card fade-in-up">
        <div className="kpi-icon">
          <Clock size={20} color="#0f79b8" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 13, color: "#172B4D", fontWeight: 600 }}>Avg Call Time</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "var(--accent-blue)" }}>4.61 <span style={{ fontSize: 13, color: "var(--muted)", marginLeft: 8 }}>Minutes</span></div>
        </div>
      </div>
    </>
  );
}
