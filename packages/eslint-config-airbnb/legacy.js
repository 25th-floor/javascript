module.exports = {
  extends: [
    'eslint-config-25th/rules/best-practices',
    'eslint-config-25th/rules/errors',
    'eslint-config-25th/rules/legacy',
    'eslint-config-25th/rules/node',
    'eslint-config-25th/rules/style',
    'eslint-config-25th/rules/variables'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
