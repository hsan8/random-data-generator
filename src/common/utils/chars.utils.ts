import _ from "lodash";
import { DIGITS_EN, LETTER_LOWERCASE, LETTER_LOWERCASE_ACCENT, LETTER_UPPERCASE, LETTER_UPPERCASE_ACCENT, SYMBOLS } from "../../data";
import { ICharacter } from "../interfaces";

export function characters(chars: ICharacter): string {
    let characters: string = "";
    if (chars.useUppercase) characters += _.join(LETTER_UPPERCASE, "");
    if (chars.useLowercase) characters += _.join(LETTER_LOWERCASE, "");
    if (chars.useSymbols) characters += _.join(SYMBOLS, "");
    if (chars.useDigits) characters += _.join(DIGITS_EN, "");
    if (chars.useLowercaseAccent)
      characters += _.join(LETTER_LOWERCASE_ACCENT, "");
    if (chars.useUppercaseWithAccent)
      characters += _.join(LETTER_UPPERCASE_ACCENT, "");
    return characters;
  }
