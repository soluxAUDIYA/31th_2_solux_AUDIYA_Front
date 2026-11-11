// 담당: A
// 모든 화면을 모바일 폭(402px, 피그마 프레임 기준)으로 감싸는 레이아웃
import { Outlet } from 'react-router-dom';

export function MobileLayout() {
  return (
    <div className="mobile-frame">
      <Outlet />
    </div>
  );
}
