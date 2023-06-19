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
import { Request } from "@smootie/fetch";

// in CJS
const { Request } = require("@smootie/fetch");

const request = new Request();
await request.request("url", options);
await request.post(..., ...);
await request.put(..., ...);
await request.trace(..., ...);
await request.head(..., ...);
await request.delete(..., ...);
await request.patch(..., ...);

// function

// in ESM
import fetch from "@smootie/fetch";

// in CJS
const fetch = require("@smootie/fetch");

console.log(await fetch("url", options));
```

- We are supported response typing with [TypeScript](https://typescriptlang.org).
```ts
import { Request } from "@smootie/fetch";
const request = new Request<{ json: { "dist-tags": { latest: string }} }>("https://registry.npmjs.com/@smootie/fetch", options);

request.request("JSON").then(() => console.log(request.getJSON()));
```