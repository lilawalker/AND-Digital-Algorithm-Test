describe('solution', () => {
  it('returns error message if no numbers in the string', () => {
    expect(() => { solution('ABC'); }).toThrow(new Error('Error, please provide a string containing numbers'));
  });

  it('returns error message if no string provided', () => {
    expect(() => { solution([1, 2]); }).toThrow(new Error('Error, please provide a string containing numbers'));
  });

  it('returns 1 combination if 1 number present in string', () => {
    expect(solution('1')).toEqual('1');
  });

  it('returns 2 combinations if 2 unique numbers present in string', () => {
    expect(solution('12')).toEqual('21,12');
  });

  it('returns 6 combinations if 3 unique numbers present in string', () => {
    expect(solution('326')).toEqual('632,623,362,326,263,236');
  });

  it('returns 3 combinations if 2 unique numbers present in string', () => {
    expect(solution('233')).toEqual('332,323,233');
  });

  it('removes letters and whitespace, and returns 6 combinations if only 3 unique numbers present in string', () => {
    expect(solution('A 3B2 C6D')).toEqual('632,623,362,326,263,236');
  });
});
