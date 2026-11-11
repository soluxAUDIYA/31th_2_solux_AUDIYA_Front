import { authHandlers } from './auth';
import { guardianHandlers } from './guardian';
import { homeHandlers } from './home';
import { callHandlers } from './call';
import { mypageHandlers } from './mypage';

export const handlers = [
  ...authHandlers,
  ...guardianHandlers,
  ...homeHandlers,
  ...callHandlers,
  ...mypageHandlers,
];
