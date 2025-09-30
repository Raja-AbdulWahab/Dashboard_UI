// src/app/dashboard/page.tsx
"use client";

import React from "react";
import TopKpiStack from "@/components/TopKpiStack";
import PerformersBox from "@/components/PerformersBox";
import AreasCard from "@/components/AreasCard";
import SummaryTable from "@/components/SummaryTable";
import CallTrendsChart from "@/components/CallTrendsChart";
import AgentsTable from "@/components/AgentsTable";
import TopTeamsRow from "@/components/TopTeamsRow";
import FilterRow from "@/components/FilterRow";
import {useState} from 'react'

export default function DashboardPage() {
  const [filters, setFilters] = useState({
    team: "All Teams",
    agent: "All Agents",
    year: "Year to Date",
  });
  return (
    <div className="dashboard-top">
      <h1 style={{ margin: "8px 0 18px 6px", fontSize: 20, fontWeight: 700 }}>
        Dashboard
      </h1>

      {/* 🔹 New Filter Row */}
        <FilterRow
        onFilter={(team, agent, year) =>
          setFilters({ team, agent, year })
        }
      />

      {/* 🔹 NEW ROW: Top Teams */}
      <TopTeamsRow />

      {/* 🔹 First Row (unchanged) */}
      <div className="top-row-grid">
        <div>
          <div className="kpi-stack">
            <TopKpiStack />
          </div>
        </div>

        <div>
          <div className="mid-column">
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <PerformersBox />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <AreasCard />
            </div>
          </div>
        </div>

        <div>
          <div className="summary-panel fade-in-up">
            <SummaryTable />
          </div>
        </div>
      </div>

      {/* 🔹 Second Row: uses same columns as top-row-grid so widths align */}
      <div className="second-row-grid">
        {/* Chart spans the first two columns (left KPIs + middle area) */}
        <div className="chart-panel fade-in-up">
          <CallTrendsChart />
        </div>

        {/* Agents table sits in the right column aligned under SummaryTable */}
        <div className="table-panel fade-in-up">
          <AgentsTable
        filterTeam={filters.team}
        filterAgent={filters.agent}
        filterYear={filters.year}
      />
        </div>
      </div>
    </div>
  );
}
