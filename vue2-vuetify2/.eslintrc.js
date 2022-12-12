module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  // extends: ["plugin:vue/essential", "@vue/airbnb"],
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 0,
    indent: 'off',
    // quotes: ["error", "single"],
    // quotes: ["off", "single"],
    // quotes: [2, "single", { avoidEscape: true }],
    quotes: ['off', 'single'],
  },
};
