import { EMAIL } from "./blacklist";

export const numbersOnly: RegExp = RegExp(/[^\d]/);
export const emailBlacklistedChars: RegExp = RegExp(`[${EMAIL}]`);
