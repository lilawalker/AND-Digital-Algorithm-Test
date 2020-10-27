/**
* The following is the function where the solution shall be written
*/

function solution(input) {
  // raise error if not a string or doesn't contain numbers
  const regex = RegExp(/\d/);

  if (typeof input !== 'string' || !regex.test(input)) {
    throw new Error('Error, please provide a string containing numbers');
  }

  // if input length < 2, then return string and don't iterate
  if (input.length < 2) {
    return input;
  }

  // reduce input to numbers only
  inputtedNumbers = input.split('').filter((num) => regex.test(num)).join('');

  function createANDSiblings(inputtedNumbers) {
    // establish base case, i.e. where input is < 2, and solve without recursion
    if (!!inputtedNumbers.length && inputtedNumbers.length < 2) {
      return inputtedNumbers;
    }

    // create array to store the combinations of numbers
    const ANDSiblings = [];

    for (let i = 0; i < inputtedNumbers.length; i++) {
      // get the first character in the string and assign to constant
      const char = inputtedNumbers[i];

      // continue iterating only if the current element is not repeated
      if (inputtedNumbers.indexOf(char) !== i) continue;

      // collect all the remaining characters and assign to a constant
      const remainingChars = inputtedNumbers.slice(0, i) + inputtedNumbers.slice(i + 1, inputtedNumbers.length);

      // recursively call createANDSiblings function on the remaining characters, pushing the value onto the array
      for (const combination of createANDSiblings(remainingChars)) {
        ANDSiblings.push(char + combination);
      }
    }
    return ANDSiblings;
  }

  // call the createANDSiblings function, sort result in descending order and join to form string
  return createANDSiblings(inputtedNumbers)
    .sort((a, b) => b - a).join(',');
}

// some example inputs
console.log(solution('326')); // expected output 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected output 632,623,362,326,263,236
