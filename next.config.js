const { PHASE_PRODUCTION_BUILD } = require('next/dist/shared/lib/constants');

module.exports = (phase) => {
  const isProdBuild = phase === PHASE_PRODUCTION_BUILD;
  /** @type {import('next').NextConfig} */
  const config = {
    reactStrictMode: true,
    transpilePackages: ['lodash-es'],
    experimental: {
      forceSwcTransforms: true
    },
    compiler: {
      ...(isProdBuild && {
        reactRemoveProperties: { properties: ['^data-testid$'] },
        removeConsole: { exclude: ['error'] }
      })
    }
  };

  return config;
};
