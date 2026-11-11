// MSW 브라우저 워커. 최초 1회 `npx msw init public` 실행이 필요합니다.
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
