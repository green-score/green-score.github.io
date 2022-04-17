const configuration = require('./.eslintrc.json');

configuration.extends.push(
  "prettier",
  "prettier/@typescript-eslint",
  "prettier/react"
);

module.exports = configuration;
