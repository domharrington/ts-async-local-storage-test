# ts-async-local-storage-test

```sh
$ npm install
```

## Run using node

```sh
$ node index.ts
non-staging
staging
$ echo $?
0
```

## Run using ts-node

```sh
$ npx ts-node index.ts
TypeError: Class constructor AsyncLocalStorage cannot be invoked without 'new'
    at new LocalStorage (/private/tmp/async-local-storage-test/index.ts:21:42)
    at Object.<anonymous> (/private/tmp/async-local-storage-test/index.ts:11:17)
    at Module._compile (node:internal/modules/cjs/loader:1196:14)
    at Module.m._compile (/private/tmp/async-local-storage-test/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1250:10)
    at Object.require.extensions.<computed> [as .ts] (/private/tmp/async-local-storage-test/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1074:32)
    at Function.Module._load (node:internal/modules/cjs/loader:909:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at phase4 (/private/tmp/async-local-storage-test/node_modules/ts-node/src/bin.ts:649:14)
$ echo $?
1
```

## Run compiled TS

```sh
$ npx tsc
$ node dist/index.js
/private/tmp/async-local-storage-test/dist/index.js:21
        return _super !== null && _super.apply(this, arguments) || this;
                                         ^

TypeError: Class constructor AsyncLocalStorage cannot be invoked without 'new'
    at new LocalStorage (/private/tmp/async-local-storage-test/dist/index.js:21:42)
    at Object.<anonymous> (/private/tmp/async-local-storage-test/dist/index.js:29:15)
    at Module._compile (node:internal/modules/cjs/loader:1196:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1250:10)
    at Module.load (node:internal/modules/cjs/loader:1074:32)
    at Function.Module._load (node:internal/modules/cjs/loader:909:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:22:47
$ echo $?
1
```
