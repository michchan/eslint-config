/* eslint-disable sort-keys */
/* eslint-disable max-lines */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable no-magic-numbers */
const react = require('./react-basic')

module.exports = {
  ...react,
  "rules": {
    ...react.rules,
    "react/forbid-elements": [react.rules["react/forbid-elements"][0], {
      ...react.rules["react/forbid-elements"][1],
      "forbid": [
        ...react.rules["react/forbid-elements"][1].forbid,
        /** -------- For styled-components use case -------- */
        "style",
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
  },
}