/* eslint-disable sort-keys */
/* eslint-disable max-lines */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable no-magic-numbers */
const nodets = require('../../node-ts')

module.exports = reactRulesPath => {
  const react = require(`../${reactRulesPath}`)

  /**
   * Disable eslint on development with Create React App,
   * say when the project is too large to make the reloading so slow.
   */
  const isReactAppDisabled = process.env.REACT_APP_DEV_ESLINT_DISABLED

  return {
    ...nodets,
    ...react,
    "env": {
      ...nodets.env,
      ...react.env,
    },
    "extends": isReactAppDisabled ? [] : [
      ...nodets.extends,
      ...react.extends,
    ],
    "plugins": [
      ...nodets.plugins,
      ...react.plugins,
    ],
    "rules": isReactAppDisabled ? {} : {
      ...nodets.rules,
      ...react.rules,

      "no-restricted-imports": ["error", {
        "paths": [
          ...nodets.rules['no-restricted-imports'][1]['paths'],
          ...react.rules['no-restricted-imports'][1]['paths'],
        ],
        "patterns": [
          ...nodets.rules['no-restricted-imports'][1]['patterns'],
          ...react.rules['no-restricted-imports'][1]['patterns'],
        ],
      }],
    },
  }
}