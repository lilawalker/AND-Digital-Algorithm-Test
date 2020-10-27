AND Digital - Solution by Lila Walker
---

### Methodology

Stage 1 - Checking the input: I used a regular expression to first check whether the input contains any numbers, and if no numbers are present then an error is raised. An error is also raised if the input is not a string.

Stage 2 - Removing non-numerical characters: I then reduced the string down to only contain numbers, before considering iterating through the numbers to create the combinations.

Stage 3 - Recursive iteration: I then created a function that takes the newly sanitised string from stage 2 and iterates through it to create the combinations. By using recursion it ensures that the time and space complexity of the algorithm is the same as the number of items produced. The solution follows a Master Theorem based approach, such as:

1. Solve the problem without recursion if the input is less than the constant (i.e. input length is less than 2)
2. If the input is more than this constant, break the problem down into smaller chunks
3. Recursively call the function until the chunk is smaller than the constant and therefore can be solved by point 1
4. Combine results and return the solution

### Testing

Tests are setup using Jasmine. To run tests:

```
$ open SpecRunner.html
```
