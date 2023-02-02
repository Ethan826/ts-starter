// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:import/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "simple-import-sort"],
  rules: {
    "@typescript-eslint/consistent-type-imports": 2,
    "import/first": 2,
    "import/named": 0,
    "import/newline-after-import": 2,
    "import/no-duplicates": 2,
    "linebreak-style": ["error", "unix"],
    "no-warning-comments": 1,
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "always"],
    "simple-import-sort/exports": 2,
    "simple-import-sort/imports": 2,
  },
};
