// 담당: A
export interface SafetyPhrases {
  danger: string;  // 비상 메시지 발송 문구 (예: 토마토) — 말하면 위험 상황으로 인식
  safe: string;    // 안전 확인 문구 (예: 비가 오네) — 말하면 귀가 재개
}

export type Sensitivity = 1 | 2 | 3 | 4;  // 16 AI 이상 전조 감지 민감도
