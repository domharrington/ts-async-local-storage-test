'use strict';

const assert = require('assert');
const { AsyncLocalStorage } = require('async_hooks');

class LocalStorage extends AsyncLocalStorage {
  getName() {
    const store = this.getStore();
    return store || 'non-staging'; // default to the dbName
  }
}

const storage = new LocalStorage();
console.log(storage.getName());
assert.equal(storage.getName(), 'non-staging');

storage.enterWith('staging')
console.log(storage.getName());
assert.equal(storage.getName(), 'staging');
