// 담당: C
export type PersonaId = "dad" | "minji" | "geonho";

export interface Persona {
  id: PersonaId;
  name: string; // 사용자가 바꿀 수 있는 표시 이름
  description: string;
  greeting: string;
  image: string;
}
