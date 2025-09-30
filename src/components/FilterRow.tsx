"use client";

import React, { useState } from "react";

interface FilterRowProps {
  onFilter: (team: string, agent: string, year: string) => void;
}

export default function FilterRow({ onFilter }: FilterRowProps) {
  const [team, setTeam] = useState("All Teams");
  const [agent, setAgent] = useState("All Agents");
  const [year, setYear] = useState("Year to Date");

  const handleSearch = () => {
    onFilter(team, agent, year);
  };

  return (
    <div className="filter-row">
      <div className="filter-item">
        <label className="filter-label">Team</label>
        <select
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          className="filter-select"
        >
          <option>All Teams</option>
          <option>Alpha</option>
          <option>Beta</option>
          <option>Gamma</option>
          <option>Delta</option>
          <option>Epsilon</option>
        </select>
      </div>

      <div className="filter-item">
        <label className="filter-label">Agent</label>
        <select
          value={agent}
          onChange={(e) => setAgent(e.target.value)}
          className="filter-select"
        >
          <option>All Agents</option>
          <option>John Doe</option>
          <option>Jane Smith</option>
          <option>Ali Khan</option>
          <option>Sara Lee</option>
          <option>Michael Chen</option>
          <option>Ayesha Noor</option>
          <option>David Smith</option>
          <option>Fatima Ali</option>
          <option>Omar Raza</option>
          <option>Emily Brown</option>
          <option>Hassan Riaz</option>
          <option>Sophia Malik</option>
        </select>
      </div>

      <div className="filter-item">
        <label className="filter-label">Year</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="filter-select"
        >
          <option>Year to Date</option>
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
        </select>
      </div>

      <button className="filter-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
