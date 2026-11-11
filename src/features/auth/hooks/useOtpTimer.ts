// 담당: A
// 인증번호 재전송 타이머 (예: 03:00)
import { useEffect, useState } from 'react';

export function useOtpTimer(seconds = 180) {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    if (left <= 0) return;
    const t = setTimeout(() => setLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [left]);

  const start = () => setLeft(seconds);
  const label = `${String(Math.floor(left / 60)).padStart(2, '0')}:${String(left % 60).padStart(2, '0')}`;
  return { left, label, start, expired: left === 0 };
}
