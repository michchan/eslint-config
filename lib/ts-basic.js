/* eslint-disable sort-keys */
/* eslint-disable max-lines */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable no-magic-numbers */
module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "project": "./tsconfig.json",
    "createDefaultProgram": true,
  },
  "extends": ["plugin:@typescript-eslint/recommended"],
  "plugins": ["@typescript-eslint"],
  "rules": {
    // Use "type[]" for array type
    "@typescript-eslint/array-type": ["error", {
      default: "array",
      readonly: "array",
    }],
    // Use interface for  definitions
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    // Use 'type' imports
    "@typescript-eslint/consistent-type-imports": ["error", {
      "prefer": "no-type-imports",
      "disallowTypeAnnotations": true,
    }],
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/no-inferrable-types": ["error", {
      "ignoreParameters": true,
      "ignoreProperties": true,
    }],

    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",

    "@typescript-eslint/naming-convention": [
      'error',
      // Enforce PascalCase for types
      {
        "selector": 'typeLike',
        "format": ['PascalCase'],
      },
      // Enforce that interface names do not begin with an I
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": false,
        },
      },
      // Enforce that boolean variables are prefixed with an allowed verb
      {
        "selector": ["variable", "parameter", "parameterProperty"],
        "format": null,
        "types": ["boolean"],
        "custom": {
          // Allow "disabled" because native JSX requires
          "regex": "^((is|am|are|has|have|should|can|do|does|did|will|IS|AM|ARE|HAS|HAVE|SHOULD|CAN|DO|DOES|DID|WILL)[A-Z_]([A-Za-z0-9_]?)+)|disabled$",
          "match": true,
        },
      },
    ],
  },
}