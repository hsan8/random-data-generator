import { RandomDataGeneratorError } from "../../exception";
import { Scope } from "../enum";

export function validateLength(
  length: number,
  maxLength: number,
  scope: Scope
): void {
  if (length < 1 || length > maxLength) {
    throw new RandomDataGeneratorError(
      `${scope}: length must be between 1 and ${maxLength}`
    );
  }
}
