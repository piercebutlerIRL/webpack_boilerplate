# 📦 webpack 5 Boilerplate

Simple webpack 5 boilerplate with babel, SCSS and hot dev server. Production build is bundled, hashed and minified.

## Installation

```bash
npm i
```

## Usage

### Development Server

```bash
npm start
```

@ `localhost:8080`.

### Production Build

```bash
npm run build
```

## Features

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)

## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module & asset bundler
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - webpack command line interface
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - webpack development server

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible version of JavaScript
- [`@babel/plugin-proposal-class-properties`](https://www.npmjs.com/package/@babel/plugin-proposal-class-properties) - Transforms static class properties as well as properties declared with the property initializer syntax
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel & webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS &compile to CSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into el DOM

### Plugins

- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`optimize-css-assets-webpack-plugin`](https://github.com/NMFR/optimize-css-assets-webpack-plugin) - Optimize & minimize CSS assets
