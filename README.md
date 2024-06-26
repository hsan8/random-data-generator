# random-data-generator

## Description
The `random-data-generator` library provides a set of functions to generate random data of various types, including numbers, strings, dates, and more. This library is useful for testing purposes, creating mock data, or any scenario where you need to generate random data dynamically. The random data generation is based on configurable parameters, allowing you to control the range, format, and characteristics of the generated data.

## Installation

```bash
npm install random-data-generator
```

## Usage

### Example 1

```javascript
const randomly= require('random-data-generator');

// Use the library
randomly.password.generatePassword({
    length: 8,
    chars: {
      useDigits: true, //optional
      useLowercase: true, //optional
      useSymbols: true, //optional
      useUppercase: true, //optional
      useLowercaseAccent:true, //optional
      useUppercaseWithAccent:true, //optional
    },
  });
```

## API

### \`randomly.password.generatePassword\`
- Description: generate password based on the bellow parameters.
- Parameters:
  - `length` (Type): length of the expected password.
  - `useDigits` (Type): allow to the generator to include the digits in the password.
  - `useLowercase` (Type): allow to the generator to include the lowercase characters in the password.
  - `useSymbols` (Type): allow to the generator to include the symbols characters in the password.
  - `useUppercase` (Type): allow to the generator to include the uppercase characters in the password.
  - `useLowercaseAccent` (Type): allow to the generator to include the lowercase with accent characters in the password.
  - `useUppercaseWithAccent` (Type): allow to the generator to include the uppercase with accent in the password.
- Returns: (Type) string.

Document all the exposed functions, classes, and methods of your library, including their parameters and return values.

## Contributing
Explain how others can contribute to your library, if applicable.

## License
Specify the license under which your library is distributed.

## Changelog
- 1.0.0 - Initial release

Document the changes made in each version of your library.
