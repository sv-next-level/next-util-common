export * from "./email";

export enum OTP {
  TWO_FACTOR_AUTHENTICATION = "Two Factor Authentication",
}

export enum PASSWORD {
  FORGOT = "Forgot Password",
  CREATE = "Create Password",
  GENERATE = "Generate Password",
}

export enum TYPE {
  OTP = "OTP",
  PASSWORD = "PASSWORD",
}

export enum METHOD {
  SMS = "SMS",
}
