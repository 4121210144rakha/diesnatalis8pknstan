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
            },
            {
                protocol: 'https',
                hostname:'img.icons8.com'
            }
        ],
    }
}

module.exports = nextConfig
