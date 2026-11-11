// 담당: A
// 01~05 회원가입 단계 사이에 입력값을 유지합니다.
import { useState } from 'react';

export interface SignUpDraft {
  name?: string;
  phone?: string;
  nickname?: string;
  loginId?: string;
}

export function useSignUpFlow() {
  const [draft, setDraft] = useState<SignUpDraft>({});
  const update = (patch: Partial<SignUpDraft>) => setDraft((d) => ({ ...d, ...patch }));
  return { draft, update };
}
