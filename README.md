[![webpack][webpack]][webpack-url]

# Webpack 4 Guide 따라하기
> Getting Started Webpack 4

 - https://webpack.js.org/guides/getting-started/


## Pre-requisites
[node.js](https://nodejs.org) 가 설치되어 있어야 한다.

```bash
brew install node
```
> mac 에서 `Homebrew`를 이용한 `node`와 `npm` 설치 


## Install webpack & npm dependencies
`webpack`과 예제 실행을 위한 `dependencies`는 디렉토리 내부의 `package.json`에 정의되어 있으며 다음 명령을 통해 일괄 설치할 수 있다.

```bash
npm install
```
> 디렉토리에 `package.json`이 있을 경우 `npm install` 명령을 사용하면 `package.json`에 나열된 의존성 리스트들을 모두 설치한다(`webpack` 포함)

## Build & Run
```bash
npm run build
```
> `webpack.config.js` 설정에 따라 빌드한다

### Using webpack-dev-server
`webpack-dev-server` 의존성을 가지고 있을 경우 라이브 리로딩이 가능한 웹서버를 제공한다.
[Using webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server)문서를 통해 `package.json`과 `webpack.config.js`의 설정 정보를 확인할 수 있다. 

```bash
npm start
```
> `localhost:8080` 서버를 띄우고 변경사항을 즉시 적용한다

[webpack]: https://img.shields.io/badge/webpack-4.4.1-blue.svg
[webpack-url]: https://webpack.js.org/
