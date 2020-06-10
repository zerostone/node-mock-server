# node-mock-server


> This repository is copied from https://github.com/smollweide/node-mock-server (based on `v0.25.4`).
>
> The original version can only run on local environment, since it relys on `open` or `start` command to open the files for editting responses etc.. However we may need to run the mock server on a server or docker environment, so change it a little bit for that purpose.
> 
> Changes made:
> * Add code editor on the method modal, when selecting responses, persisted response text would be reflected in the editor
> * Add the `Save` button on the method modal, to persist modified response
> * Remove preview feature which relys `open` on the method modal


> File based Node REST API mock server

![node-mock-server-ui.png](https://cloud.githubusercontent.com/assets/2912007/26034363/c509d2c2-38bb-11e7-9175-4a151f7a550f.jpg)

## Getting Started

This application requires Node `6` or higher.
For Node `<6` please use `node-mock-server@0.22.1`
For Node `<4` please use `node-mock-server@0.11.0`

##### 1. Install npm package:

```
$ npm install node-mock-server --save-dev
```

##### 2. Start init process:

```
$ node node_modules/node-mock-server/init
```

### Options

[node-mock-server options](/doc/readme-options.md)

### Usage examples

[node-mock-server usage examples](/doc/readme-usage-examples.md)

## Features

-   Node.js and file based ([folder structure](/doc/readme-folder-structure.md))
-   [Node Mock Server UI](/doc/readme-ui-documentation.md)
-   [Functions in mock data](/doc/readme-mock-functions.md)
-   [Faker included](/doc/readme-faker.md)
-   [Query params in mock data](/doc/readme-query-params.md)
-   [Dynamic path params in mock data](/doc/readme-path-params.md)
-   [Expected responses](/doc/readme-expected-response.md)
-   [Middleware responses](/doc/readme-middleware.md)
-   [Express Middleware](/doc/readme-express-middleware.md)
-   [Error cases](/doc/readme-expected-response.md)
-   [Swagger import](/doc/readme-swagger-import.md)
    -   DTO import
    -   DTO response function
-   [Response validation](/doc/readme-response-validation.md)
-   [Response header](/doc/readme-response-header.md)
-   [DTO to Class converter](/doc/readme-dto-2-class.md)
-   [Collections](/doc/readme-collections.md)
-   [Tunnel](/doc/readme-tunnel.md)

## CLI

```
$ node <nodeScript> --help

  Usage
    $ node <nodeScript> [--version] [--help] <command> [<args>]

  Options
    $                  start mock server
    $ --version        print node-mock-server version
    $ --help           print help
    $ swagger-import   run a swagger import
    $ validate         run a validation for all mock data
    $ collections      print all available collections
    $ collection <id>  activate collection

  Examples
    $ node demo/index.js --version
    $ node demo/index.js collections
```

## Demo

```shell
git clone https://github.com/smollweide/node-mock-server.git
cd node-mock-server
npm install
node demo
```

## License

[MIT License](https://github.com/smollweide/node-mock-server/blob/master/LICENSE)

## Changelog

Please see the [Releases](https://github.com/smollweide/node-mock-server/releases)
