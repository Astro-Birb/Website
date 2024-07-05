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

        <link rel="icon" type="image/svg" href="https://cdn.discordapp.com/attachments/1092978456196829265/1258881682396938342/astro-logo.svg?ex=6689a86d&is=668856ed&hm=d33140c8b31a982e8d26f66cdd3dff69096316aa57ced1ac70b09149ed940d30&" />
        <meta property="og:title" content="Astro Birb" />
        <meta property="og:description" content="Astro Birb is designed to simplify tasks related to managing punishments and staff. It includes features such as handling infractions, promotions, and monitoring message quotas." />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/1092978456196829265/1258881682396938342/astro-logo.svg?ex=6689a86d&is=668856ed&hm=d33140c8b31a982e8d26f66cdd3dff69096316aa57ced1ac70b09149ed940d30&" />
        <meta property="og:url" content="https://www.astrobirb.dev" />
        <meta name="theme-color" content="#5b65e8" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}