/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    })
    return config
  },
  rewrites: () => [
    {
      source: '/api/graphql',
      destination: 'http://localhost:3050/graphql'
    }
  ]
}

module.exports = nextConfig
