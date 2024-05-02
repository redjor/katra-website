/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.prismic.io'
            },
            {
                hostname: 'studiokatra.cdn.prismic.io'
            },
            {
                hostname: 'i.vimeocdn.com'
            },
            {
                hostname: 'i.ytimg.com'
            },
            {
                hostname: 'i.etsystatic.com'
            }
        ]
    }
};

export default nextConfig;
