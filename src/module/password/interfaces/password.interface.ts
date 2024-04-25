import { ICharacter } from "../../../common/interfaces";

export interface IPassword {
  length: number;
  chars: ICharacter;
}
export interface IMultiPassword extends IPassword {
  count: number;
}
