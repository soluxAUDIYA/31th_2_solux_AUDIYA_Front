// 담당: A | 피그마: 18
// 보호자에게 보내는 위험 알림 SMS 문구. 실제 발송은 백엔드에서 처리합니다.
export interface SosSmsParams {
  userName: string;
  address: string;
  link: string;
}

export const sosSmsTemplate = ({ userName, address, link }: SosSmsParams) =>
  `[어디야] ${userName}님에게서 위험 알림이 발생했어요.\n마지막 위치: ${address}\n상황 확인: ${link}`;
