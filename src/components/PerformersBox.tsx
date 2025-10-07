"use client";

import React from "react";
import { User } from "lucide-react";

function PerformerCard({
  label,
  name,
  percent,
  color,
  teammates,
}: {
  label: string;
  name: string;
  percent: number;
  color: string;
  teammates: number;
}) {
  return (
    <div className="performer-card fade-in-up">
      {/* Circular percentage with dynamic fill */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          className="donut"
          style={{
            background: `conic-gradient(${color} ${percent * 3.6}deg, #e6e6e6 ${percent * 3.6}deg)`,
          }}
        >
          <div className="donut-inner" style={{ color }}>
            {Math.round(percent)}%
          </div>
        </div>
      </div>

      {/* Performer details */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontWeight: 700,
            color: "#172B4D",
            marginBottom: 6,
          }}
        >
          {label}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
          }}
        >
          {/* Main Avatar */}
          <div
            className="avatar-icon"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "2px solid #4a90e2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
            }}
          >
            <User
              size={18}
              strokeWidth={2}
              style={{ color: "#4a90e2", opacity: 0.8 }}
            />
          </div>

          <div style={{ fontWeight: 600 }}>{name}</div>
        </div>

        {/* Smaller avatars */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          {[...Array(teammates)].map((_, i) => (
            <div
              key={i}
              className="avatar-icon-small"
              style={{
                border: "1.5px solid #4a90e2",
              }}
            >
              <User
                size={12}
                strokeWidth={2}
                style={{ color: "#4a90e2", opacity: 0.7 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PerformersBox() {
  return (
    // <div style={{border:" 1px solid #b0b0b0ff",
    //   padding: "6px",
    //   backgroundColor: "white"
    // }}>
      <>
      <PerformerCard
        label="Top Performer"
        name="Shahvez Hassan"
        percent={83}
        color="#1f9f5f"
        teammates={4}
      />
      <PerformerCard
        label="Low Performer"
        name="Ahmed Hanif"
        percent={54}
        color="#2f86d0"
        teammates={4}
      />
      </>
  );
}
