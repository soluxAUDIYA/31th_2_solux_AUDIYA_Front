// 담당: A
// 응답 형식은 백엔드 API 명세에 맞춰 작성하세요.
import { http, HttpResponse } from 'msw';

export const authHandlers = [
  http.post('/api/auth/login', () => HttpResponse.json({ accessToken: 'mock-token' })),
];
