/**
* The following is the function where the solution shall be written
*/

function solution(input) {
  const regex = RegExp(/\d/);

  if (typeof input !== 'string' || !regex.test(input)) {
    throw new Error('Error, please provide a string containing numbers');
  }

  if (input.length < 2) {
    return input;
  }

  inputtedNumbers = input.split('').filter((num) => regex.test(num)).join('');

  function createANDSiblings(inputtedNumbers) {
    if (!!inputtedNumbers.length && inputtedNumbers.length < 2) {
      return inputtedNumbers;
    }

    const ANDSiblings = [];

    for (let i = 0; i < inputtedNumbers.length; i++) {
      const char = inputtedNumbers[i];

      if (inputtedNumbers.indexOf(char) !== i) continue;

      const remainingChars = inputtedNumbers.slice(0, i) + inputtedNumbers.slice(i + 1, inputtedNumbers.length);

      for (const combination of createANDSiblings(remainingChars)) {
        ANDSiblings.push(char + combination);
      }
    }
    return ANDSiblings;
  }

  return createANDSiblings(inputtedNumbers)
    .sort((a, b) => b - a).join(',');
}

// some example inputs
console.log(solution('326')); // expected output 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected output 632,623,362,326,263,236
