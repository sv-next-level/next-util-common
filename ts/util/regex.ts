import { EMAIL } from "@/common/util/blacklist";

export const numbersOnly: RegExp = RegExp(/[^\d]/);
export const emailBlacklistedChars: RegExp = RegExp(`[${EMAIL}]`);
