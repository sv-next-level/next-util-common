import { OTP, PASSWORD } from "./index";

export enum EMAIL_VENDOR {
  SMTP_EMAIL = "SMTP Email",
}

export const EMAIL_ACTION = [
  PASSWORD.CREATE,
  PASSWORD.FORGOT,
  OTP.TWO_FACTOR_AUTHENTICATION,
];
