export interface ISignInDto {
  username: string;
  password: string;
}

export interface ITokenResponse {
  token: string;
}

export interface ITokensResponse {
  access_token: string;
  refresh_token: string;
}