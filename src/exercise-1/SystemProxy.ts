export class SystemProxy implements SystemFunction {
  #function: SystemFunction;

  constructor(systemFunction: SystemFunction) {
    this.#function = systemFunction;
  }

  /* TODO: guardar resultado en variable, el doSomething del proxy solo llama a this.#function.doSomething()
  si su variable es undefined/null */

  doSomething(): string {
    return this.#function.doSomething()
  }
}

/* TODO: si la función tuviese parametros a recibir se podría crear un diccionario que asocie los resultados */
