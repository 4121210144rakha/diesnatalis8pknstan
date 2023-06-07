const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.unsplash.com',
            }
        ]
    }
}

module.exports = nextConfig
