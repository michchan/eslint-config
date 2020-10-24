/* eslint-disable sort-keys */
/* eslint-disable max-lines */
/* eslint-disable max-len */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-magic-numbers */
const es = require('./lib/es-basic')
const ts = require('./lib/ts-basic')

module.exports = {
  ...es,
  ...ts,
  "extends": [
    ...es.extends,
    ...ts.extends,
  ],
  "plugins": [
    ...es.plugins,
    ...ts.plugins,
  ],
  "rules": {
    ...es.rules,
    ...ts.rules,

    /** ------ Overriden by typescript-eslint ------ */

    "brace-style": "off",
    "@typescript-eslint/brace-style": es.rules['brace-style'],

    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": es.rules['comma-dangle'],

    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": es.rules['comma-spacing'],

    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": es.rules['func-call-spacing'],

    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": es.rules['keyword-spacing'],

    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": es.rules['lines-between-class-members'],

    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": es.rules['no-array-constructor'],

    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": es.rules['no-dupe-class-members'],

    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": es.rules['no-duplicate-imports'],

    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": es.rules['no-empty-function'],

    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": es.rules['no-magic-numbers'],

    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": es.rules['no-redeclare'],

    "quotes": "off",
    "@typescript-eslint/quotes": es.rules['quotes'],

    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": es.rules['space-before-function-paren'],

    "semi": "off",
    "@typescript-eslint/semi": es.rules['semi'],

    "indent": "off",
    "@typescript-eslint/indent": es.rules['indent'],

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": es.rules['no-unused-vars'],
  }
}