import { OTP, PASSWORD } from ".";

export enum EMAIL_VENDOR {
  SMTP_EMAIL = "SMTP Email",
}

export const EMAIL_ACTION = [
  PASSWORD.CREATE,
  PASSWORD.FORGOT,
  PASSWORD.GENERATE,
  OTP.TWO_FACTOR_AUTHENTICATION,
];