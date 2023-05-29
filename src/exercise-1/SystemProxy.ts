export class SystemProxy implements SystemFunction {
  #function : SystemFunction;

  constructor(systemFunction: SystemFunction) {
    this.#function = systemFunction;
  }

  doSomething(): string {
    return this.#function.doSomething()
  }
}
