"use client";

import React from "react";

const agents = [
  { name: "John Doe", calls: 120, avgMins: 4.5, satisfaction: "92%" },
  { name: "Jane Smith", calls: 98, avgMins: 3.8, satisfaction: "88%" },
  { name: "Ali Khan", calls: 134, avgMins: 5.1, satisfaction: "95%" },
  { name: "Sara Lee", calls: 112, avgMins: 4.2, satisfaction: "90%" },
  { name: "Michael Chen", calls: 87, avgMins: 3.9, satisfaction: "85%" },
  { name: "Ayesha Noor", calls: 145, avgMins: 5.3, satisfaction: "97%" },
  { name: "David Smith", calls: 102, avgMins: 4.0, satisfaction: "91%" },
  { name: "Fatima Ali", calls: 76, avgMins: 3.6, satisfaction: "83%" },
  { name: "Omar Raza", calls: 121, avgMins: 4.4, satisfaction: "89%" },
  { name: "Emily Brown", calls: 109, avgMins: 4.1, satisfaction: "90%" },
  { name: "Hassan Riaz", calls: 133, avgMins: 5.0, satisfaction: "92%" },
  { name: "Sophia Malik", calls: 99, avgMins: 3.7, satisfaction: "87%" },
];

export default function AgentsTable() {
  return (
    <div className="table-panel fade-in-up">
      <div className="table-scroll">
        <table className="summary-table" style={{ minWidth: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: 160 }}>Agent</th>
              <th>Calls</th>
              <th>Avg. Mins</th>
              <th>Satisfaction</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((a, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 600 }}>{a.name}</td>
                <td>{a.calls}</td>
                <td>{a.avgMins}</td>
                <td>{a.satisfaction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
