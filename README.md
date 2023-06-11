# @smootie/fetch
- Faster fetch module.

# Installation
- We are recommend to use [`pnpm`](https://npmjs.com/pnpm)
```bash
pnpm i @smootie/fetch
```

# Usage
- We have 2 option to fetch.
```js
// class

// in ESM
import { Fetch } from "@smootie/fetch";

// in CJS
const { Fetch } = require("@smootie/fetch");

const request = new Fetch("adresss", options);
request.request("PLAIN").then(() => console.log(request.getPlain()));


// function

// in ESM
import fetch from "@smootie/fetch";

// in CJS
const fetch = require("@smootie/fetch");

console.log(await fetch("adress", options));
```

- We are supported response typing with [TypeScript](https://typescriptlang.org).
```ts
import { Fetch } from "@smootie/fetch";
const request = new Fetch<{ json: { "dist-tags": { latest: string }} }>("https://registry.npmjs.com/@smootie/fetch", options);

request.request("JSON").then(() => console.log(request.getJSON()));
```