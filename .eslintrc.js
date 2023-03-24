/*
  0 - off,
  1 - warning,
  2 - error
*/

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.eslint.json'
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
  plugins: ['simple-import-sort'],
  rules: {
    /* [ERROR === 2] */
    '@typescript-eslint/consistent-type-imports': [2, { disallowTypeAnnotations: false }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function'],
        unnamedComponents: 'arrow-function'
      }
    ],
    'no-shadow': 2,
    /* [WARN === 1] */
    'no-console': [1, { allow: ['info', 'error'] }],
    'react-hooks/exhaustive-deps': 1,
    'react/no-array-index-key': 1,
    'simple-import-sort/exports': 1,
    'simple-import-sort/imports': [
      1,
      {
        groups: [
          // External packages:
          ['^react', '^@?\\w'],
          // Internal packages:
          ['^@(/.*|$)'],
          // Side effect imports:
          ['^\\u0000'],
          // Parent imports:
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports:
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports:
          ['^.+\\.s?css$']
        ]
      }
    ],
    'max-len': [
      1,
      {
        code: 100,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true
      }
    ],
    /* [OFF === 0] */
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 0,
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 0,
    // Airbnb prefers forEach
    'unicorn/no-array-for-each': 0,
    // Next.JS auto provides 'React'
    'react/react-in-jsx-scope': 0,
    // Useless:
    'sort-imports': 0,
    'import/order': 0,
    'react/prop-types': 0,
    'import/extensions': 0,
    'consistent-return': 0,
    'react/button-has-type': 0,
    'react/no-unused-prop-types': 0,
    'react/require-default-props': 0,
    'no-template-curly-in-string': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-useless-fragment': 0,
    'import/no-extraneous-dependencies': 0
    // 'prettier/prettier': 0,
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        // Allow CJS until ESM support improves
        '@typescript-eslint/no-var-requires': 0,
        'unicorn/prefer-module': 0
      }
    }
  ]
};
