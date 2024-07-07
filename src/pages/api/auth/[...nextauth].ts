import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

const clientId = process.env.DISCORD_CLIENT_ID;
const clientSecret = process.env.DISCORD_CLIENT_SECRET;
// I know this seems useless but it's important
if (!clientId || !clientSecret) {
  throw new Error('Missing environment variables DISCORD_CLIENT_ID or DISCORD_CLIENT_SECRET');
}
export default NextAuth({
  providers: [
    DiscordProvider({
      clientId,
      clientSecret,
      authorization: { params: { scope: 'identify guilds' } }
    })
  ],
})
