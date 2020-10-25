/* eslint-disable sort-keys */
/* eslint-disable max-lines */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-magic-numbers */
const nodets = require('./node-ts')
const react = require('./lib/react-basic')

module.exports = {
  ...nodets,
  ...react,
  "env": {
    ...nodets.env,
    ...react.env,
  },
  "extends": [
    ...nodets.extends,
    ...react.extends,
  ],
  "plugins": [
    ...nodets.plugins,
    ...react.plugins,
  ],
  "rules": {
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
      ]
    }]
  }
}