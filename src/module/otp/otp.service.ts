import _ from "lodash";
import { IOtp } from "./interfaces";
import { characters, validateLength } from "../../common/utils";
import { Scope } from "../../common/enum";
import { OTP_MAX_LENGTH } from "./constant";

/**
 * Generates a random otp based on the provided parameters.
 *
 * @param {object} params - An object containing parameters for generating the otp.
 * @param {number} params.length - The length of the otp to generate.
 * @param {object} params.chars - An object containing options for including character types.
 * @param {boolean} params.chars.useUppercase - Indicates whether to include uppercase letters.
 * @param {boolean} params.chars.useLowercase - Indicates whether to include lowercase letters.
 * @param {boolean} params.chars.useSymbols - Indicates whether to include symbols.
 * @param {boolean} params.chars.useDigits - Indicates whether to include digits.
 * @param {boolean} params.chars.useLowercaseAccent - Indicates whether to include lowercase accent letters.
 * @param {boolean} params.chars.useUppercaseWithAccent - Indicates whether to include uppercase accent letters.
 * @returns {string} The generated otp.
 */
export function generateOtp(params: IOtp): string {
  
  validateLength(params.length || 0, OTP_MAX_LENGTH, Scope.OTP);

  const chars = characters(params.chars);

  let otp: string = "";

  _.times(params.length, () => {
    const randomIndex = _.random(chars.length - 1);

    otp += chars.charAt(randomIndex);
  });

  return otp;
}

