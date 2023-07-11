const assert = require('assert');
const { AsyncLocalStorage } = require('async_hooks');

const storage = new AsyncLocalStorage();

function getDbName() {
  return storage.getStore() || 'non-staging';
}

console.log(getDbName());
assert.equal(getDbName(), 'non-staging');

storage.enterWith('staging')
console.log(getDbName());
assert.equal(getDbName(), 'staging');
