import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord"
import { JWT } from "next-auth/jwt"

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id?: string
      name?: string | null
      email?: string | null
      image?: string | null
      accessToken?: string
      refreshToken?: string
      tokenType?: string
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string
    accessToken?: string
    refreshToken?: string
    tokenType?: string
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Discord({
    clientId: process.env.DISCORD_CLIENT_ID!,
    clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    authorization: "https://discord.com/api/oauth2/authorize?scope=identify+guilds"
  })],
  callbacks: {
    async jwt({ token, account, profile }: any) {
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.tokenType = account.token_type
        token.id = profile.id  // Add Discord user ID
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.accessToken = token.accessToken
        session.user.refreshToken = token.refreshToken
        session.user.tokenType = token.tokenType
        session.user.id = token.id  // Add Discord user ID to session
      }
      return session
    },
  },
})