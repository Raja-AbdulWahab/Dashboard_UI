// src/components/AreasCard.tsx
"use client";

import React, { useState } from "react";

const improvementRows = [
  { text: "CSRs are unable to fully answer the customers' questions", pct: 4.29 },
  { text: "CSRs are failing to provide a polite and appropriate response", pct: 93.22 },
  { text: "CSRs do not consistently demonstrate compassion", pct: 98.24 },
  { text: "CSRs are not verifying the patient's identity before discussion", pct: 98.43 },
];

const excellenceRows = [
  { text: "CSRs show empathy towards customers", pct: 92.14 },
  { text: "CSRs resolve queries on first call", pct: 89.33 },
  { text: "CSRs maintain professional tone", pct: 95.20 },
];

export default function AreasCard() {
  const [activeTab, setActiveTab] = useState<"improvement" | "excellence">("improvement");

  const rows = activeTab === "improvement" ? improvementRows : excellenceRows;

  return (
    <div className="areas-card fade-in-up">
      <div className="areas-tabs">
        <div
          className={`tab-base ${activeTab === "improvement" ? "tab-active-improvement" : "tab-inactive"}`}
          onClick={() => setActiveTab("improvement")}
        >
          Areas of Improvement
        </div>
        <div
          className={`tab-base ${activeTab === "excellence" ? "tab-active-excellence" : "tab-inactive"}`}
          onClick={() => setActiveTab("excellence")}
        >
          Areas of Excellence
        </div>
      </div>

      <div style={{ marginTop: 6 }}>
        {rows.map((r, idx) => (
          <div key={idx} style={{ marginBottom: 12 }}>
            <div className="area-row">
              <div className="area-desc">{r.text}</div>
              <div className="area-percent">{r.pct.toFixed(2)}%</div>
            </div>
            <div className="area-bar-wrap">
              <div
                className={`area-bar ${activeTab === "excellence" ? "bar-excellence" : "bar-improvement"}`}
                style={{ width: `${Math.max(6, Math.min(100, r.pct))}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
