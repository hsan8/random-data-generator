import _ from "lodash";

import { RandomDataGeneratorError } from "../../../exception/random-data-error";
import { IMultiPassword } from "../interfaces";
import { ARRAY_PASSWORD_MAX_LENGTH, PASSWORD_MAX_LENGTH } from "../constant";

export function validateMultiPasswordsParams(params: IMultiPassword): void {
  if (params.length < 1 || params.length > PASSWORD_MAX_LENGTH) {
    throw new RandomDataGeneratorError(
      `length must be between 1 and ${PASSWORD_MAX_LENGTH}`
    );
  }

  if (params.count < 1 || params.count > ARRAY_PASSWORD_MAX_LENGTH) {
    throw new RandomDataGeneratorError(
      `count must be between 1 and ${ARRAY_PASSWORD_MAX_LENGTH}`
    );
  }
}
