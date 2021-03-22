# preact-deno-types-error

## Date 03/22/2021

Using preact (`v10.5.13`) in the Deno runtime with Typescript results in the following error:

```shell
error: TS7026 [ERROR]: JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists.
console.log(render(<h1>hello, world!</h1>));
```

### To run this example:

0. ensure Deno is available on your system
    - Installation: https://deno.land/#installation
1. clone the repository
2. _Optionally_ precache the modules with: `deno cache --config tsconfig.json deps.ts`
3. run the `mod.tsx` file: `deno run --config tsconfig.json mod.tsx`
