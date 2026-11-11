// 담당: C
// 응답 형식은 백엔드 API 명세에 맞춰 작성하세요.
import { http, HttpResponse } from 'msw';

export const callHandlers = [
  http.post('/api/sos', () => HttpResponse.json({ status: 'sent' })),
];
