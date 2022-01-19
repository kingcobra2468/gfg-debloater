module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: false,
    commonjs: true,
  },
  extends: [
    'airbnb-base',
    'plugin:node/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-param-reassign': 0,
    'node/no-missing-require': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_[0-9]*' }],
  },
};
