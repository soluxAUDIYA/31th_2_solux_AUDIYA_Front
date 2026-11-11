// 담당: A
// 라우트를 추가할 때는 routes.ts의 ROUTES와 devRoutes도 함께 수정하세요.
import { createBrowserRouter } from 'react-router-dom';
import { MobileLayout } from './layouts/MobileLayout';
import { DevIndexPage } from './DevIndexPage';
import { ROUTES } from './routes';
import { StartPage, PermissionPage, IdentityVerifyPage, AccountCreatePage, EmergencySetupPage, GuardianVerifyPage, OnboardingCompletePage, LoginPage, ResetVerifyPage, ResetPasswordPage } from '@/features/auth/pages';
import { GuardianSosStatusPage, GuardianSafeReturnPage } from '@/features/guardian/pages';
import { HomePage, DestinationSearchPage, FavoritesPage, FavoriteRegisterPage, RouteSelectPage, ReturnProgressPage, RouteDeviationPage } from '@/features/home/pages';
import { AiCallPage, SafetyCheckPage, ArrivalCompletePage } from '@/features/call/pages';
import { MyPage, ContactManagePage, SafetySettingPage, AiSettingPage } from '@/features/mypage/pages';

export const router = createBrowserRouter([
  {
    element: <MobileLayout />,
    children: [
      // ---- A ----
      { path: ROUTES.StartPage, element: <StartPage /> },
      { path: ROUTES.PermissionPage, element: <PermissionPage /> },
      { path: ROUTES.IdentityVerifyPage, element: <IdentityVerifyPage /> },
      { path: ROUTES.AccountCreatePage, element: <AccountCreatePage /> },
      { path: ROUTES.EmergencySetupPage, element: <EmergencySetupPage /> },
      { path: ROUTES.GuardianVerifyPage, element: <GuardianVerifyPage /> },
      { path: ROUTES.OnboardingCompletePage, element: <OnboardingCompletePage /> },
      { path: ROUTES.LoginPage, element: <LoginPage /> },
      { path: ROUTES.ResetVerifyPage, element: <ResetVerifyPage /> },
      { path: ROUTES.ResetPasswordPage, element: <ResetPasswordPage /> },
      { path: ROUTES.GuardianSosStatusPage, element: <GuardianSosStatusPage /> },
      { path: ROUTES.GuardianSafeReturnPage, element: <GuardianSafeReturnPage /> },
      // ---- B ----
      { path: ROUTES.HomePage, element: <HomePage /> },
      { path: ROUTES.DestinationSearchPage, element: <DestinationSearchPage /> },
      { path: ROUTES.FavoritesPage, element: <FavoritesPage /> },
      { path: ROUTES.FavoriteRegisterPage, element: <FavoriteRegisterPage /> },
      { path: ROUTES.RouteSelectPage, element: <RouteSelectPage /> },
      { path: ROUTES.ReturnProgressPage, element: <ReturnProgressPage /> },
      { path: ROUTES.RouteDeviationPage, element: <RouteDeviationPage /> },
      // ---- C ----
      { path: ROUTES.AiCallPage, element: <AiCallPage /> },
      { path: ROUTES.SafetyCheckPage, element: <SafetyCheckPage /> },
      { path: ROUTES.ArrivalCompletePage, element: <ArrivalCompletePage /> },
      { path: ROUTES.MyPage, element: <MyPage /> },
      { path: ROUTES.ContactManagePage, element: <ContactManagePage /> },
      { path: ROUTES.SafetySettingPage, element: <SafetySettingPage /> },
      { path: ROUTES.AiSettingPage, element: <AiSettingPage /> },
      { path: '/dev', element: <DevIndexPage /> },
    ],
  },
]);
