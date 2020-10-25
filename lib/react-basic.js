/* eslint-disable sort-keys */
/* eslint-disable max-lines */
/* eslint-disable max-len */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-magic-numbers */
module.exports = {
  "env": {
    "browser": true,
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  "plugins": [
    "react",
    "react-hooks",
    "jsx-a11y",
  ],
  "settings": {
    "react": {
      // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // Default to latest and warns if missing
      // It will default to "detect" in the future
      "version": "detect",
    },
  },
  "rules": {
    /** ---------------- Frontend specific ---------------- */
    "no-console": "error",

    /** ---------------- React specific ---------------- */
    "react/boolean-prop-naming": ["error", {
      "rule": "^(is|has|should|can|did|will|are)[A-Z]([A-Za-z0-9]?)+",
      "validateNested": true,
    }],
    "react/button-has-type": "error",
    "react/destructuring-assignment": ["error", "always"],
    "react/forbid-component-props": ["error", {
      "forbid": [
        // For styled-components
        "as",
      ],
    }],
    "react/forbid-elements": ["error", {
      /** Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element */
      "forbid": [
        /** -------- Metadata or root elements -------- */
        "html",
        "base",
        "head",
        "style",
        "title",
        "body",
        "script",
        "noscript",
        /** -------- Obsolete / Deprecated / Insecure elements -------- */
        "iframe",
        "acronym",
        "applet",
        "basefont",
        "bgsound",
        "big",
        "blink",
        "center",
        "command",
        "content",
        "dir",
        "element",
        "font",
        "frame",
        "frameset",
        "image",
        "isindex",
        "keygen",
        "listing",
        "marquee",
        "menuitem",
        "multicol",
        "nextid",
        "nobr",
        "noembed",
        "noframes",
        "plaintext",
        "shadow",
        "spacer",
        "strike",
        "tt",
        "xmp",
        /** -------- Disable web-components -------- */
        "slot",
        "template",
        /** -------- For styled-components use case -------- */
        // Usually customized/styled elements across the app
        "button",
        "a",
        "img",
        "video",
        "select",
        "input",
        "textarea",
        // Ambiguous "div"
        "div",
        // Don't use native style of "hr"
        "hr",
      ],
    }],
    "react/function-component-definition": ["error", {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function",
    }],
    "react/no-access-state-in-setstate": "error",
    "react/no-adjacent-inline-elements": "error",
    "react/no-array-index-key": "error",
    "react/no-danger": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unsafe": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": ["error"],
    "react/sort-prop-types": "error",
    "react/static-property-placement": "error",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",

    // Not working with forwardRef
    // TODO: Make a PR
    // Last updated: Michael Chan, 2020-10-22
    "react/prop-types": "off",

    /** ---------------- JSX specific ---------------- */
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-child-element-spacing": "error",
    "react/jsx-closing-bracket-location": ["error", "after-props"],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-brace-presence": ["error", {
      "props": "never",
      "children": "always",
    }],
    "react/jsx-curly-newline": ["error", {
      "multiline": "consistent",
      "singleline": "consistent",
    }],
    "react/jsx-curly-spacing": ["error", {
      "when": "never",
      "children": true,
    }],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-handler-names": "warn",
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-max-depth": ["error", { "max": 4 }],
    "react/jsx-max-props-per-line": ["error", { "max": 2 }],
    "react/jsx-no-bind": "error",
    "react/jsx-no-literals": "off",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-one-expression-per-line": ["error", { "allow": "single-child" }],
    "react/jsx-pascal-case": "error",
    "react/jsx-sort-props": "error",
    "react/jsx-tag-spacing": ["error", {
      "closingSlash": "never",
      "beforeSelfClosing": "never",
      "afterOpening": "never",
      "beforeClosing": "never",
    }],
    "react/jsx-wrap-multilines": ["error", {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line",
      "condition": "parens-new-line",
      "logical": "parens-new-line",
      "prop": "parens-new-line",
    }],

    /** --------- React-hooks --------- */
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",

    /** ------------------- JSX Accesibility ------------------- */
    "jsx-a11y/tabindex-no-positive": "off",

    /** ------------------- Restrictions for specific use cases ------------------- */
    /**
     * Ensure macro import for styled-components
     * https://styled-components.com/docs/tooling#enforce-macro-imports
     */
    "no-restricted-imports": [
      "error",
      {
        "paths": [{
          "name": "styled-components",
          "message": "Please import from styled-components/macro.",
        }],
        "patterns": [
          "!styled-components/macro",
        ],
      },
    ],
  }
}