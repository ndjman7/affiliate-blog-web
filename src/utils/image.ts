// 이미지 URL을 환경에 따라 처리하는 함수
export const getImageUrl = (path: string): string => {
  // 이미 전체 URL인 경우 (http:// 또는 https://로 시작하는 경우)
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const isProduction = process.env.NODE_ENV === "production";
  return isProduction ? path : `http://localhost:8000${path}`;
};
