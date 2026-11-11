// 담당: C
export interface ReturnStats {
  totalMinutes: number;
  distanceKm: number;
  cctvCount: number;
  safeStoreCount: number;
  smartLightRatio: number;
}

export interface ReturnHistory {
  id: string;
  from: string;
  to: string;
  endedAt: string;
  distanceKm: number;
  result: 'arrived' | 'sos';
}
