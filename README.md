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
$ npx ts-node index.js
non-staging
staging
$ echo $?
1
```

## Run compiled TS

```sh
$ npx tsc
$ node dist/index.js
non-staging
staging
$ echo $?
0
```
