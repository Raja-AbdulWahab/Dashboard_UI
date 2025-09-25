// src/components/AreasCard.tsx
"use client";

import React from "react";

const rows = [
  { text: "CSRs are unable to fully answer the customers' questions", pct: 4.29 },
  { text: "CSRs are failing to provide a polite and appropriate response", pct: 93.22 },
  { text: "CSRs do not consistently demonstrate compassion", pct: 98.24 },
  { text: "CSRs are not verifying the patient's identity before discussion", pct: 98.43 },
];

export default function AreasCard() {
  return (
    <div className="areas-card fade-in-up">
      <div className="areas-tabs">
        <div className="tab-active">Areas of Improvement</div>
        <div className="tab-inactive">Areas of Excellence</div>
      </div>

      <div style={{ marginTop: 6 }}>
        {rows.map((r, idx) => (
          <div key={idx} style={{ marginBottom: 12 }}>
            <div className="area-row">
              <div className="area-desc">{r.text}</div>
              <div className="area-percent">{r.pct.toFixed(2)}%</div>
            </div>
            <div className="area-bar-wrap">
              <div className="area-bar" style={{ width: `${Math.max(6, Math.min(100, r.pct))}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
