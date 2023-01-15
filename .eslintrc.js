const eslintConfig = require("@monorepo/eslint");

eslintConfig.parserOptions.project = ["./tsconfig.json"];

module.exports = eslintConfig;
