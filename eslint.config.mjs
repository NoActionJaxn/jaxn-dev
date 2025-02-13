import config from "eslint-config-standard";


/** @type {import('eslint').Linter.Config[]} */
export default [
  ...[].concat(config),
  {
    "extends": ["prettier"],
    "plugins": ["prettier"],
    "rules": {
      "prettier/prettier": ["warn"]
    },
  }
];
