import _ from "lodash";
import { IMultiPassword, IPassword } from "./interfaces";
import { characters, validateLength } from "../../common/utils";
import { Scope } from "../../common/enum";
import { PASSWORD_MAX_LENGTH } from "./constant";

/**
 * Generates a random password based on the provided parameters.
 *
 * @param {object} params - An object containing parameters for generating the password.
 * @param {number} params.length - The length of the password to generate.
 * @param {object} params.chars - An object containing options for including character types.
 * @param {boolean} params.chars.useUppercase - Indicates whether to include uppercase letters.
 * @param {boolean} params.chars.useLowercase - Indicates whether to include lowercase letters.
 * @param {boolean} params.chars.useSymbols - Indicates whether to include symbols.
 * @param {boolean} params.chars.useDigits - Indicates whether to include digits.
 * @param {boolean} params.chars.useLowercaseAccent - Indicates whether to include lowercase accent letters.
 * @param {boolean} params.chars.useUppercaseWithAccent - Indicates whether to include uppercase accent letters.
 * @returns {string} The generated password.
 */
export function generatePassword(params: IPassword): string {
  validateLength(params.length || 0, PASSWORD_MAX_LENGTH, Scope.PASSWORD);

  const chars = characters(params.chars);

  let password: string = "";

  _.times(params.length, () => {
    const randomIndex = _.random(chars.length - 1);

    password += chars.charAt(randomIndex);
  });

  return password;
}

/**
 * Generates a random password based on the provided parameters.
 *
 * @param {object} params - An object containing parameters for generating the password.
 * @param {number} params.length - The length of the password to generate.
 * @param {number} params.count - The number of the passwords to generate.
 * @param {object} params.chars - An object containing options for including character types.
 * @param {boolean} params.chars.useUppercase - Indicates whether to include uppercase letters.
 * @param {boolean} params.chars.useLowercase - Indicates whether to include lowercase letters.
 * @param {boolean} params.chars.useSymbols - Indicates whether to include symbols.
 * @param {boolean} params.chars.useDigits - Indicates whether to include digits.
 * @param {boolean} params.chars.useLowercaseAccent - Indicates whether to include lowercase accent letters.
 * @param {boolean} params.chars.useUppercaseWithAccent - Indicates whether to include uppercase accent letters.
 * @returns {string[]} The generated array of passwords.
 */
export function generateMultiPassword(params: IMultiPassword): string[] {
  validateLength(params.length || 0, PASSWORD_MAX_LENGTH, Scope.PASSWORD);

  const chars = characters(params.chars);
  let passwordArray: string[] = [];

  _.times(params.count, () => {
    let password = "";

    _.times(params.length, () => {
      const randomIndex = _.random(chars.length - 1);

      password += chars.charAt(randomIndex);
    });

    passwordArray.push(password);
  });

  return passwordArray;
}
