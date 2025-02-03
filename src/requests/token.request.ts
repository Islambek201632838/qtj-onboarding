export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const REFRESH_TOKEN= 'REFRESH_TOKEN';

export const setAccessToken = (accessToken: string) => {
  accessToken && localStorage.setItem(ACCESS_TOKEN, accessToken);
};

export const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};

export const getAccessToken = (): string => {
  return localStorage.getItem(ACCESS_TOKEN) || '';
};

export const setRefreshToken = (refreshToken: string) => {
  refreshToken && localStorage.setItem(REFRESH_TOKEN, refreshToken);
};

export const removeRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN);
};

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN);
};