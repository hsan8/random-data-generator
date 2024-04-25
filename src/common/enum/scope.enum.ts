import { ObjectValues } from "../../core/types";

export const Scope = {
  PASSWORD: "PASSWORD",
  OTP: "OTP",
} as const;

export type Scope = ObjectValues<typeof Scope>;
