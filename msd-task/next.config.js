/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
    modifyVars: { '@primary-color': '#3c6753' },
});