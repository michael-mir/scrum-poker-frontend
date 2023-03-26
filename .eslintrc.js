module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json'
  },
  env: { es2021: true, browser: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    /* [ERROR] */
    '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function'],
        unnamedComponents: 'arrow-function'
      }
    ],
    'no-shadow': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal'
          }
        ],
        alphabetize: { order: 'asc' },
        'newlines-between': 'always'
      }
    ],
    /* [WARN] */
    'no-console': ['warn', { allow: ['info', 'error'] }],
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-array-index-key': 'warn',
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true
      }
    ],
    /* [OFF] */
    // 'prettier/prettier': 'off',
    'import/prefer-default-export': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-for-each': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'consistent-return': 'off',
    'react/button-has-type': 'off',
    'react/no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
    'no-template-curly-in-string': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'import/no-extraneous-dependencies': 'off'
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-var-requires': 0,
        'unicorn/prefer-module': 0
      }
    }
  ]
};
