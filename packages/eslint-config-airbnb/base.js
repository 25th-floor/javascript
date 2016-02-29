module.exports = {
  extends: [
    'eslint-config-25th/legacy',
    'eslint-config-25th/rules/es6',
  ].map(require.resolve),
  rules: {}
};
