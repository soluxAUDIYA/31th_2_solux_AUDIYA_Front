// 담당: A
export interface Guardian {
  id: string;
  relation: string;      // 관계/별명 (엄마, 아빠 …)
  name: string;          // 실명
  phone: string;
  priority: number;      // 1~3
  verified: boolean;     // 04-1 보호자 인증 완료 여부
  smsEnabled: boolean;   // 15 위치 URL 포함 긴급 SMS 전송
}
