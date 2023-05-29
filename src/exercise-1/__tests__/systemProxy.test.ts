import { FunctionA } from "../FunctionaA";
import { SystemProxy } from "../SystemProxy";

describe('Test - SystemProxy', () => {
  let proxy: SystemProxy;

  beforeAll(() => {
    const functionA: SystemFunction = new FunctionA();
    proxy = new SystemProxy(functionA)
  });

  test('GIVEN a Proxy, WHEN doSomething() is called THEN it return a string', () => {
    expect(proxy.doSomething()).toBe('I\'m doing somenthing')
  });

});
