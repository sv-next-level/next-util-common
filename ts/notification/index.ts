export * from "./email";

export enum METHOD {
  EMAIL = "EMAIL",
}

export enum TYPE {
  OTP = "OTP",
  PASSWORD = "PASSWORD",
}

export enum OTP {
  TWO_FACTOR_AUTHENTICATION = "Two Factor Authentication",
}

export enum PASSWORD {
  CREATE = "Create Password",
  FORGOT = "Forgot Password",
}

export const EMAIL_ACTION = [
  PASSWORD.CREATE,
  PASSWORD.FORGOT,
  OTP.TWO_FACTOR_AUTHENTICATION,
];
