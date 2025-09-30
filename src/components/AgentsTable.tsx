"use client";

import React from "react";

const agents = [
  { name: "John Doe", team: "Alpha", year: 2025, calls: 120, avgMins: 4.5, satisfaction: "92%" },
  { name: "Jane Smith", team: "Beta", year: 2025, calls: 98, avgMins: 3.8, satisfaction: "88%" },
  { name: "Ali Khan", team: "Alpha", year: 2024, calls: 134, avgMins: 5.1, satisfaction: "95%" },
  { name: "Ali Khan", team: "Gamma", year: 2025, calls: 110, avgMins: 4.8, satisfaction: "90%" },
  { name: "Sara Lee", team: "Delta", year: 2023, calls: 112, avgMins: 4.2, satisfaction: "90%" },
  { name: "Michael Chen", team: "Epsilon", year: 2025, calls: 87, avgMins: 3.9, satisfaction: "85%" },
  { name: "Ayesha Noor", team: "Alpha", year: 2024, calls: 145, avgMins: 5.3, satisfaction: "97%" },
  { name: "David Smith", team: "Beta", year: 2025, calls: 102, avgMins: 4.0, satisfaction: "91%" },
  { name: "Fatima Ali", team: "Gamma", year: 2023, calls: 76, avgMins: 3.6, satisfaction: "83%" },
  { name: "Omar Raza", team: "Delta", year: 2024, calls: 121, avgMins: 4.4, satisfaction: "89%" },
  { name: "Emily Brown", team: "Epsilon", year: 2025, calls: 109, avgMins: 4.1, satisfaction: "90%" },
  { name: "Hassan Riaz", team: "Alpha", year: 2025, calls: 133, avgMins: 5.0, satisfaction: "92%" },
  { name: "Sophia Malik", team: "Beta", year: 2023, calls: 99, avgMins: 3.7, satisfaction: "87%" },
];

interface AgentsTableProps {
  filterTeam: string;
  filterAgent: string;
  filterYear: string;
}

export default function AgentsTable({ filterTeam, filterAgent, filterYear }: AgentsTableProps) {
  // ✅ Filtering logic
  const filteredAgents = agents.filter((a) => {
    const matchTeam = filterTeam === "All Teams" || a.team === filterTeam;
    const matchAgent = filterAgent === "All Agents" || a.name === filterAgent;
    const matchYear = filterYear === "Year to Date" || a.year.toString() === filterYear;
    return matchTeam && matchAgent && matchYear;
  });

  return (
    <div className="table-panel fade-in-up">
      <div className="table-scroll">
        <table className="summary-table" style={{ minWidth: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: 160 }}>Agent</th>
              <th>Team</th>
              <th>Year</th>
              <th>Calls</th>
              <th>Avg. Mins</th>
              <th>Satisfaction</th>
            </tr>
          </thead>
          <tbody>
            {filteredAgents.map((a, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 600 }}>{a.name}</td>
                <td>{a.team}</td>
                <td>{a.year}</td>
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
