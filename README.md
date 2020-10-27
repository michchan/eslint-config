# @michchan/eslint-config

[![NPM](https://nodei.co/npm/@michchan/eslint-config.png)](https://nodei.co/npm/@michchan/eslint-config/)

My shared eslint config package for different use cases

# Get Started

## Installing

Install using `npm` or `yarn`:

```sh
npm i --save-dev @michchan/eslint-config
```

```sh
yarn add -D @michchan/eslint-config
```

## Usage

For basic ES6+ NodeJS-based app:

```Javascript
// .eslintrc.js
module.exports = {
  "extends": "@michchan/eslint-config",
}
```

For TypeScript NodeJS-based app:

```Javascript
// .eslintrc.js
module.exports = {
  "extends": "@michchan/eslint-config/node-ts",
}
```

For React TypeScript app:

```Javascript
// .eslintrc.js
module.exports = {
  "extends": "@michchan/eslint-config/react-ts",
}
```

# Features

## Disable in Create React App

If you are using `@michchan/eslint-config/react-ts`, you can disable it by adding the following environment variables before running an script (e.g. `react-scripts start`):

```sh
REACT_APP_DEV_ESLINT_DISABLED=true
```

This is useful to **disable Eslint on development with Create React App**, but remain checking in CI workflows.
Say when the project is too large to make the reloading so slow.