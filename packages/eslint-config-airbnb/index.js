module.exports = {
  extends: [
    'eslint-config-25th/base',
    'eslint-config-25th/rules/strict',
    'eslint-config-25th/rules/react',
  ].map(require.resolve),
  rules: {}
};
