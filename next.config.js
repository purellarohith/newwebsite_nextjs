const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.licdn.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'play-lh.googleusercontent.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'rohithpurella.blob.core.windows.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
    env: {
        sas: {
            base: "https://rohithpurella.blob.core.windows.net/rohith/",
            token: "?sp=r&st=2023-09-28T06:23:09Z&se=2025-01-29T14:23:09Z&sv=2022-11-02&sr=c&sig=t5f%2FEvkZx98o175ZuxUFbBKxIKQXPQ62xNTbH520wWk%3D"
        }
    }
}

module.exports = nextConfig
