1.- Create tsconfig.ts

2.- Create lib folder

3.- Execute command on terminal
```sh
$ deno types > lib/deno_runtime.d.ts
```
4.- Enable Deno land on VSC

Create a file .vscode/settings.json in your project folder:

// .vscode/settings.json
{
  "deno.enable": true,
}

5.- Install package on of local cache
```sh
$ deno install https://deno.land/x/oak/mod.ts
```

## How execute application

```sh
$ deno run --allow-net index.ts
```
