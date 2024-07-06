import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Astro Birb</title>

        <link rel="icon" type="image/svg" href="/astro-logo.svg" />
        <meta property="og:title" content="Astro Birb" />
        <meta property="og:description" content="Astro Birb is designed to simplify tasks related to managing punishments and staff. It includes features such as handling infractions, promotions, and monitoring message quotas." />
        <meta property="og:image" content="/astro-logo.svg" />
        <meta property="og:url" content="https://www.astrobirb.dev" />
        <meta name="theme-color" content="#5b65e8" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}