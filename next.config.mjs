/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/support', 
            destination: 'https://discord.gg/DhWdgfh3hN',
            permanent: true, 
          },
          {
            source: '/apply', 
            destination: 'https://docs.google.com/forms/d/1m2-wmbA1Ctmk-YCi8zQDjZucHX5z18KaVfz0dmBBDCo/viewform',
            permanent: true, 
          },
          {
            source: '/docs',
            destination: 'https://docs.astrobirb.dev',
            permanent: true,
            
          }
        ];
      },

};



export default nextConfig;
