module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 0,
    indent: 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'max-len': 'off',
    // 'import/no-extraneous-dependencies': ["error", {"devDependencies": true}],
    'import/no-extraneous-dependencies': 'off',
  },
};