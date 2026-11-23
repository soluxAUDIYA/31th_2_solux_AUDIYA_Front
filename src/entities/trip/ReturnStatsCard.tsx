// 담당: C | 피그마: 13·19-B

import type { ReturnStats } from "./types";
// 정해진 약속 가져오기

export interface ReturnStatsCardProps {
  stats: Pick<ReturnStats, "totalMinutes" | "distanceKm">;
}
const labelStyle = {
  fontSize: 11,
  color: "#9ca3af",
} as const;

const numberStyle = {
  fontSize: 36,
  fontWeight: 800,
  color: "#fff",
  lineHeight: 1,
} as const;

const unitStyle = {
  fontSize: 12,
  fontWeight: 700,
  color: "#fff",
  marginLeft: 2,
} as const;

export function ReturnStatsCard({ stats }: ReturnStatsCardProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-end",
        gap: 24,
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
        <span style={labelStyle}>총 소요시간</span>
        <span>
          <span style={numberStyle}>{stats.totalMinutes}</span>
          <span style={unitStyle}>분</span>
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
        <span style={labelStyle}>안심 이동 거리</span>
        <span>
          <span style={numberStyle}>{stats.distanceKm}</span>
          <span style={unitStyle}>km</span>
        </span>
      </div>
    </div>
  );
}
