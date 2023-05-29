import { FunctionA } from "../FunctionaA";

describe('Test - FunctionA', () => {
  let functionA: SystemFunction;

  beforeAll(() => {
    functionA = new FunctionA()
  });

  test('GIVEN a FunctionA, WHEN doSomething() is called THEN it return a string', () => {
    expect(functionA.doSomething()).toBe('I\'m doing somenthing')
  });

});
