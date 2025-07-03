// 이미지 URL을 환경에 따라 처리하는 함수
export const getImageUrl = (path: string): string => {
  const isProduction = process.env.NODE_ENV === "production";
  return isProduction ? path : `http://localhost:8000${path}`;
};
