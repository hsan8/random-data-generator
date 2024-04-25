import { generateOtp } from "./src/module/otp";
import { generatePassword } from "./src/module/password";

console.log(
  generatePassword({
    length: 2,
    chars: {
      useDigits: true,
      useLowercase: true,
      useSymbols: true,
      useUppercase: true,
    },
  })
);

console.log(
  generateOtp({
    length: 12,
    chars: {
      useDigits: true,
      useUppercase:true,
    },
  })
);