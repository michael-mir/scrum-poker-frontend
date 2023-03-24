module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    indentations: 2,
    'string-quotes': 'single',
    'color-named': 'never',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'no-dublicate-selectors': true,
    'number-leading-zero': 'always',
    'font-weight-notation': 'numeric',
    'rule-empty-line-before': 'always',
    'comment-whitespace-inside': 'always',
    'comment-empty-line-before': 'always',
    'declaration-no-important': true,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'selector-no-qualifying-type': true,
    'selector-combinator-space-after': 'always',
    'selector-attribute-quotes': 'always',
    'selector-attribute-operator-space-after': 'always',
    'selector-attribute-operator-space-before': 'always',
    'selector-attribute-brackets-space-inside': 'always',
    'selector-pseudo-element-colon-notation': 'single',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-before': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'order/properties-alphabetical-order': true,
    // Rules for [tailwind]:
    'function-no-unknown': null,
    'scss/function-no-unknown': [true, { ignoreFunctions: ['theme'] }],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'layer',
          'config',
          /** tailwindcss v1-2 */
          'variants',
          'responsive',
          'screen'
        ]
      }
    ],
    'declaration-block-trailing-semicolon': null,
    'unit-allowed-list': ['em', 'rem', 's'],
    'no-descending-specificity': null,
    'block-no-empty': null
  }
};
