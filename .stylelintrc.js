module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-property-sort-order-smacss'],
  rules: {
    'at-rule-no-unknown': null,
    'selector-class-pattern': '[a-z0-9A-Z_]+',
  },
  overrides: [
    {
      files: ['*.less', '**/*.less'],
      customSyntax: require('postcss-less'),
      extends: ['stylelint-config-standard', 'stylelint-config-property-sort-order-smacss'],
      rules: {
        'at-rule-no-unknown': null,
        'selector-pseudo-class-no-unknown': null,
        // ..
      },
    },
  ],
};
