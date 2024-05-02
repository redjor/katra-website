/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.prismic.io'
            },
            {
                hostname: 'studiokatra.cdn.prismic.io'
            }
        ]
    }
};

export default nextConfig;
