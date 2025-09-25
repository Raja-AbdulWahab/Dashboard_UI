// src/components/SummaryTable.tsx
"use client";

import React from "react";

const header = ["", "Call Volume", "Avg. Call Mins", "Active Agent", "Satisfaction Score", "Call per Agent"];
const rows = [
  { label: "MTD", values: ["0", "0", "0", "0", "0"] },
  { label: "Last 30 days", values: ["17,056", "4.60", "89", "63.49", "191.64"] },
  { label: "Last week", values: ["0", "0", "0", "0", "0"] },
  { label: "Today", values: ["0", "0", "0", "0", "0"] }
];

export default function SummaryTable() {
  return (
    <>
      <table className="summary-table">
        <thead>
          <tr>
            <th style={{ width: 160 }}></th>
            {header.slice(1).map((h) => <th key={h}>{h}</th>)}
          </tr>
        </thead>

        <tbody>
          {rows.map((r, idx) => (
            <tr key={idx}>
              <td style={{ padding: "12px 10px", fontWeight: 700 }}>{r.label}</td>
              {r.values.map((v, i) => <td key={i}>{v}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ textAlign: "right", marginTop: 10 }}>
        <a style={{ color: "#c44", fontSize: 13, textDecoration: "none" }} href="#">More Details</a>
      </div>
    </>
  );
}
