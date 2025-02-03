import axios from 'axios';
import api from './api';
import { ISignInDto, ITokenResponse, ITokensResponse } from 'interfaces/auth.interface';

export const signIn = (data: ISignInDto): Promise<ITokenResponse> => {
  return api.post('auth/sign-in', data);
};

export const refreshToken = (): Promise<ITokenResponse> => {
  return axios.post('/api/auth/refresh');
};

export const login = (data: ISignInDto): Promise<ITokensResponse> => {
  return axios.post(`/api/auth/login`, data).then(res => res.data);
}

export const logout = (): Promise<void> => {
  return axios.post('/api/auth/logout');
};