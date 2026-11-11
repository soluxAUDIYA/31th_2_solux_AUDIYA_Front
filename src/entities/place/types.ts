// 담당: B
export type FavoriteKind = 'home' | 'work' | 'custom';

export interface Place {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  favoriteKind?: FavoriteKind;
  alias?: string;
}

export interface RouteOption {
  type: 'safe' | 'shortest';
  minutes: number;
  distanceM: number;
  brightRatio: number;   // 밝은 길 %
  cctvCount: number;
  warning?: string;
}
