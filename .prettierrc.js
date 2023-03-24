// https://prettier.io/docs/en/options

/** @type {import('prettier').Config} */
module.exports = {
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation
  plugins: [require('prettier-plugin-tailwindcss')],
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  // Default
  semi: true,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
  bracketSpacing: true,
  arrowParens: 'always'
};
