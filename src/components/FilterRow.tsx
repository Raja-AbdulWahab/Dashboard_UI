"use client";

import React, { useState } from "react";
import { EuiComboBox, EuiButton } from "@elastic/eui";

interface FilterRowProps {
  onFilter: (team: string, agent: string, year: string) => void;
}

export default function FilterRow({ onFilter }: FilterRowProps) {
  const teams = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon"];
  const agents = [
    "John Doe",
    "Jane Smith",
    "Ali Khan",
    "Sara Lee",
    "Michael Chen",
    "Ayesha Noor",
    "David Smith",
    "Fatima Ali",
    "Omar Raza",
    "Emily Brown",
    "Hassan Riaz",
    "Sophia Malik",
  ];
  const years = ["2025", "2024", "2023"];

  const [selectedTeam, setSelectedTeam] = useState<{ label: string }[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<{ label: string }[]>([]);
  const [selectedYear, setSelectedYear] = useState<{ label: string }[]>([]);

  const handleSearch = () => {
    const team = selectedTeam[0]?.label || "All Teams";
    const agent = selectedAgent[0]?.label || "All Agents";
    const year = selectedYear[0]?.label || "Year to Date";
    onFilter(team, agent, year);
  };

  return (
    <div className="filter-row">
      {/* Team Dropdown */}
      <div className="filter-item">
        <label className="filter-label">Team</label>
        <EuiComboBox
          className="eui-custom-dropdown"
          singleSelection={{ asPlainText: true }}
          placeholder="Select Team"
          options={teams.map((t) => ({ label: t }))}
          selectedOptions={selectedTeam}
          onChange={(options) => setSelectedTeam(options)}
        />
      </div>

      {/* Agent Dropdown */}
      <div className="filter-item">
        <label className="filter-label">Agent</label>
        <EuiComboBox
          className="eui-custom-dropdown"
          singleSelection={{ asPlainText: true }}
          placeholder="Select Agent"
          options={agents.map((a) => ({ label: a }))}
          selectedOptions={selectedAgent}
          onChange={(options) => setSelectedAgent(options)}
        />
      </div>

      {/* Year Dropdown */}
      <div className="filter-item">
        <label className="filter-label">Year</label>
        <EuiComboBox
          className="eui-custom-dropdown"
          singleSelection={{ asPlainText: true }}
          placeholder="Select Year"
          options={years.map((y) => ({ label: y }))}
          selectedOptions={selectedYear}
          onChange={(options) => setSelectedYear(options)}
        />
      </div>

      {/* Search Button */}
      <div className="filter-item">
        <EuiButton
          fill
          className="filter-btn"
          onClick={handleSearch}
          style={{ height: "40px", marginTop: "18px" }}
        >
          Search
        </EuiButton>
      </div>
    </div>
  );
}
