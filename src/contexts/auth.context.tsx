import React, { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN, removeAccessToken, setAccessToken, setRefreshToken, removeRefreshToken } from 'requests/token.request';

interface AuthContextType {
  token?: string | null;
  refresh?: string | null;
  handleSetToken: (token: string, refresh: string) => void;
  handleRemoveToken: () => void;
}

interface IProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  refresh: null,
  handleSetToken: () => null,
  handleRemoveToken: () => null,
});

export const useAuth = (): AuthContextType => useContext(AuthContext);

export const AuthProvider: React.FC<IProps> = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [token, setToken] = React.useState<string | null>(
    localStorage.getItem(ACCESS_TOKEN) as string,
  );
  const [refresh, setRefresh] = React.useState<string | null>(
    localStorage.getItem(REFRESH_TOKEN) as string,
  );

  const handleSetToken = (tokenValue: string, refreshToken: string) => {
    setToken(tokenValue);
    setAccessToken(tokenValue);
    setRefresh(refreshToken);
    setRefreshToken(refreshToken);

    navigate('/');
  };

  const handleRemoveToken = () => {
    setToken(null);
    setRefresh(null);
    removeAccessToken();
    removeRefreshToken();
  };


  const value = { token, handleSetToken, handleRemoveToken, refresh };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};