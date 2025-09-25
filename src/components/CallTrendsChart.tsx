// src/components/CallTrendsChart.tsx
"use client";

import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "08/14", calls: 0 },
  { date: "08/15", calls: 1800 },
  { date: "08/16", calls: 0 },
  { date: "08/17", calls: 1200 },
  { date: "08/18", calls: 0 },
  { date: "08/19", calls: 1200 },
  { date: "08/20", calls: 0 },
  { date: "08/21", calls: 1800 },
  { date: "08/22", calls: 0 },
  { date: "08/23", calls: 1200 },
  { date: "08/24", calls: 0 },
  { date: "08/25", calls: 1800 },
  { date: "08/26", calls: 0 },
  { date: "08/27", calls: 0 },
];

export default function CallTrendsChart() {
  return (
    <div className="summary-panel" style={{ padding: 12, position: "relative", height: "100%" }}>
      {/* Tabs row (visual only) */}
      <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
        {["5D", "1W", "MTD", "3M", "6M", "1Y"].map((t, i) => (
          <button
            key={t}
            style={{
              border: "none",
              background: i === 5 ? "rgba(15,121,184,1)" : "transparent",
              color: i === 5 ? "#fff" : "var(--muted)",
              padding: "6px 10px",
              borderRadius: 12,
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div style={{ position: "relative", height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0f79b8" stopOpacity={0.18} />
                <stop offset="100%" stopColor="#0f79b8" stopOpacity={0.04} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e6eef2" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="calls"
              stroke="#0f79b8"
              strokeWidth={2}
              fill="url(#colorCalls)"
              activeDot={{ r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Total Calls box on top-right (absolute) */}
      <div style={{ position: "absolute", right: 16, top: 40, textAlign: "right" }}>
        <div style={{ color: "var(--accent-blue)", fontWeight: 700, fontSize: 20 }}>
          17,056
        </div>
        <div style={{ color: "var(--muted)", fontSize: 13 }}>Total Calls</div>
      </div>

      {/* small footer link aligned like screenshot */}
      <div style={{ marginTop: 8, textAlign: "right" }}>
        <a style={{ color: "#c44", textDecoration: "none", fontSize: 13 }} href="#">
          More Details
        </a>
      </div>
    </div>
  );
}
