import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin(
    './src/shared/lib/i18n.ts'
);
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "http",
              hostname: "**",
            },
            {
              protocol: "https",
              hostname: "**",
            },
          ],
    },
    trailingSlash: true,
};
 
export default withNextIntl(nextConfig);