const removeImports = require('next-remove-imports');

/** @type {import('next').NextConfig} */
const nextConfig = removeImports({
  eslint: {
    ignoreDuringBuilds: true,
  },
});

module.exports = nextConfig;
