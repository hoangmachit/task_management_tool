/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'loremflickr.com',
            },
        ],
    },
    reactStrictMode: true,
}

module.exports = nextConfig
