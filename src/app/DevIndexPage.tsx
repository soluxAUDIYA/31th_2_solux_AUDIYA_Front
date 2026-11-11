// 담당: A
// 개발용 화면 목록. /dev 에서 모든 라우트로 바로 이동할 수 있습니다. 배포 전에 제거합니다.
import { Link } from 'react-router-dom';
import { devRoutes } from './routes';

export function DevIndexPage() {
  return (
    <main className="page">
      <h1>화면 목록 (개발용)</h1>
      <ul>
        {devRoutes.map((r) => (
          <li key={r.path}>
            <Link to={r.path}>
              [{r.owner}] {r.figma} {r.label} — {r.path}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
