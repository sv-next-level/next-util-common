import { METHOD } from "@/common/api/method";

export type SessionVerificationHeaders = {
  refresh_tokens: string;
  device_id: string;
};

export type SessionVerificationBody = {
  access_token: string;
  user_id: string;
};

export type SessionCreationHeaders = {
  refresh_tokens?: string;
  device_id?: string;
};

export type SessionCreationBody = {
  user_id: string;
};
