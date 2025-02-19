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
        
      },
    {
      source: '/status',
      destination: 'https://status.astrobirb.dev',
      permanent: true,
    },
    {
      source: '/qa',
      destination: 'https://ermbot.xyz/1092976553752789054/62b489be-19b1-4e9f-a9ad-32a1cc003fe2/application',
      permanent: true,
    }
    ];
  },
  output: 'standalone',
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com', 'cdn.discordapp.com', 'corsproxy.io', 'www.roblox.com', 'thumbnails.roblox.com', 'tr.rbxcdn.com']

  }
  
}


module.exports = nextConfig
