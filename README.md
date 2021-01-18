# CoremyDB

## Installation
    yarn

## Develop

### Main app
    yarn dev

### Proxy app
    yarn dev:proxy:ts



## Build
### Main app
    yarn start
### Proxy app
    yarn start:proxy

## Docker

    docker build -t edgar0011/coremydb .
    docker run -p 2077:8080 -d edgar0011/coremydb