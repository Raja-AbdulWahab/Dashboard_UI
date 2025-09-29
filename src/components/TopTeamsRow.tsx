"use client";

import React from "react";

const teamsData = [
  { team: "Alpha", lead: "John Doe", performance: "92%" },
  { team: "Beta", lead: "Jane Smith", performance: "89%" },
  { team: "Gamma", lead: "David Lee", performance: "96%" },
  { team: "Delta", lead: "Sophia", performance: "83%" },
  { team: "Epsilon", lead: "Ali", performance: "81%" },
  { team: "Delta", lead: "Shahzaib", performance: "45%" },
  { team: "Epsilon", lead: "Ayesha", performance: "76%" },
  { team: "Epsilon", lead: "Zain", performance: "66%" },
];

// ✅ Helper: decide class by performance %
function getPerformanceClass(performance: string) {
  const value = parseInt(performance);
  if (value >= 90) return "performance-high";
  if (value >= 75) return "performance-medium";
  return "performance-low";
}

export default function TopTeamsRow() {
  return (
    <div className="teams-row-wrapper">
      <h2 className="teams-title">Top Performing Teams</h2>
      <div className="teams-row-scroll">
        {teamsData.map((team, index) => (
          <div
            key={index}
            className={`team-card ${getPerformanceClass(team.performance)}`}
          >
            <h3 className="team-name">{team.team}</h3>
            <p className="team-lead">Lead: {team.lead}</p>
            <p className="team-performance">Performance: {team.performance}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
