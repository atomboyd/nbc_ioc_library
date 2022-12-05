
// Simple IoC JS library 

class IoC {
  constructor() {
    this.container = new Map();
  }

  register(name, obj) {
    this.container.set(name, obj);
  }

  resolve(name) {
    const obj = this.container.get(name);
    if (!obj) {
      throw new Error(`'${name}' Object is missing, please reregister`);
    }
    return obj;
  }
}

// To use the library, register objects or classes with the register method, and then resolve them using the resolve method. For example:

// Define a class
class SomeService {
  doSomething() {
    // ...
  }
}

// Create an instance of IoC
const ioc = new IoC();

// Register the class with IoC
ioc.register('SomeService', SomeService);

// Resolve the class from IoC
const someService = ioc.resolve('SomeService');

// Use the class
someService.doSomething();

// Example tests:

const assert = require('assert')

describe('IoC', () => {

    it('should register and resolve objects', () => {
        const ioc = new IoC();

        class SomeService {
            doSomething() {
                return 'hello world';
            }
        }

        ioc.register('SomeService', SomeService);

        const someService = ioc.resolve('SomeService');
        assert.strictEqual(someService.doSomething(), 'hello world');
    });

    it('should throw an error if object is not found', () => {
        const ioc = new IoC();

        assert.throws(() => ioc.resolve('SomeService'), 'Object Not Found.');
    });
});