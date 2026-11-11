// 담당: A
// 모든 API 호출은 이 함수를 거칩니다. 1/4 백엔드 연동 때 여기만 바꾸면 되도록 유지하세요.
const BASE_URL = import.meta.env.VITE_USE_MOCK === 'true' ? '' : import.meta.env.VITE_API_BASE_URL;

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export async function apiClient<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init.headers },
  });
  if (!res.ok) throw new ApiError(res.status, await res.text());
  return res.json() as Promise<T>;
}
