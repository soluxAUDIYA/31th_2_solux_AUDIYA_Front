// 담당: A
export const maskPhone = (phone: string) =>
  phone.replace(/^(\d{3})-?(\d{3,4})-?(\d{4})$/, '$1-****-$3');

export const formatPhone = (phone: string) =>
  phone.replace(/^(\d{3})(\d{3,4})(\d{4})$/, '$1-$2-$3');
