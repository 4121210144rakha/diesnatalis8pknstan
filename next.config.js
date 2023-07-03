const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.unsplash.com',
            },
            {
                protocol:'https',
                hostname:'**.imgcdn.dev',
            }
        ],
    }
}

module.exports = nextConfig
