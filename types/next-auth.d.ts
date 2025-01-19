import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken: string
    tokenType?: string
    discordUser?: {
      id: string
      username: string
      discriminator: string
      email: string
      image_url: string
      accentColor?: string
    }
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }

  interface Profile {
    id: string
    username: string
    discriminator: string
    email: string
    avatar: string | null
    accentColor?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
    tokenType?: string
    profile?: {
      id: string
      username: string
      discriminator: string
      email: string
      image_url: string
      accentColor?: string
    }
    userId?: string
  }
}
