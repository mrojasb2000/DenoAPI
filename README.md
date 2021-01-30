## Howto upgrade last version of Deno

```sh
$ deno upgrade
```

## Howto config environment Deno on Visual Studio Code

1.- Create tsconfig.json

```sh
$ touch tsconfig.json
```

2.- Create lib folder

```sh
$ mkdir lib
```

3.- Execute command on terminal
```sh
$ deno types > lib/deno_runtime.d.ts
```
4.- Enable Deno land on VSC

4.1.- Create .vscode folder

```sh
$ mkdir .vscode
```

4.2.- Create a file settings.json in your .vscode folder:

```sh
$ touch settings.json
```

4.3.- Add code to settings.json
```sh
// .vscode/settings.json
{
  "deno.enable": true,
}
```

## Howto install new packages on of local cache Deno
```sh
$ deno install https://deno.land/x/oak/mod.ts
```

## Howto  execute application

```sh
$ deno run --allow-net index.ts
```

## Howto monitoring any changes in you Deno application

1.- Install denon application
```sh
$ deno install -qAf -r --unstable https://deno.land/x/denon/denon.ts
```

or 

```sh
$ deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts
```

2.- Execute your application with denon
```sh
$ denon run --allow-net app.ts 
```