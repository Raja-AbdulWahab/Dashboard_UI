// src/app/dashboard/page.tsx
"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic"; // ✅ import dynamic

import TopKpiStack from "@/components/TopKpiStack";
import PerformersBox from "@/components/PerformersBox";
import AreasCard from "@/components/AreasCard";
import SummaryTable from "@/components/SummaryTable";
import CallTrendsChart from "@/components/CallTrendsChart";
import AgentsTable from "@/components/AgentsTable";
import TopTeamsRow from "@/components/TopTeamsRow";

// ✅ Lazy import FilterRow so it runs only on client
const FilterRow = dynamic(() => import("@/components/FilterRow"), { ssr: false });

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

      {/* ✅ Filter Row now client-only */}
      <FilterRow
        onFilter={(team, agent, year) => setFilters({ team, agent, year })}
      />

      <TopTeamsRow />

      <div className="top-row-grid">
        <div className="kpi-stack"><TopKpiStack /></div>

        <div className="mid-column">
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <PerformersBox />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <AreasCard />
          </div>
        </div>

        <div className="summary-panel fade-in-up">
          <SummaryTable />
        </div>
      </div>

      <div className="second-row-grid">
        <div className="chart-panel fade-in-up">
          <CallTrendsChart />
        </div>

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
