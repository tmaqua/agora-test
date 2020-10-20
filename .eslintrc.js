module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  plugins: ["@typescript-eslint", "import", "react-hooks"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-undef": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars-experimental": "error",
    eqeqeq: ["error", "always"],
    "import/no-unresolved": "off",
    curly: ["error", "all"],
    "import/no-duplicates": "error",
    "import/order": ["error", { alphabetize: { order: "asc" } }],
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  ignorePatterns: [
    "node_modules/",
    "!.eslintrc.js",
    "!.prettierrc.js",
    "src/openapi",
  ],
};
