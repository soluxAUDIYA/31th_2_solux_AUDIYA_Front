// 담당: A
// 규칙은 피그마 03 회원가입 에러 문구 기준입니다.

/** 영문으로 시작하는 영문·숫자 6~20자 */
export const isValidId = (v: string) => /^[A-Za-z][A-Za-z0-9]{5,19}$/.test(v);

/** 영문·숫자·특수문자 포함 8~20자 */
export const isValidPassword = (v: string) =>
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/.test(v);

/** 한글·영문·숫자 2~12자 */
export const isValidNickname = (v: string) => /^[가-힣A-Za-z0-9]{2,12}$/.test(v);

/** 010으로 시작하는 휴대전화 번호 (하이픈 허용) */
export const isValidPhone = (v: string) => /^01[016789]-?\d{3,4}-?\d{4}$/.test(v);

/** 안전 문구: 3자 이상 */
export const isValidPhrase = (v: string) => v.trim().length >= 3;
