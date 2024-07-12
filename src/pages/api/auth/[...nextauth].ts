import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

const clientId = process.env.DISCORD_CLIENT_ID;
const clientSecret = process.env.DISCORD_CLIENT_SECRET;

// Ensure environment variables are present
if (!clientId || !clientSecret) {
  throw new Error('Missing environment variables DISCORD_CLIENT_ID or DISCORD_CLIENT_SECRET');
}

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    DiscordProvider({
      clientId: clientId,
      clientSecret: clientSecret,
      authorization: {
        params: {
          scope: 'identify guilds',
        },
      },
      profile(profile) {
        if (profile.avatar === null) {
          const defaultAvatarNumber = parseInt(profile.discriminator) % 5;
          profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`;
        } else {
          const format = profile.avatar.startsWith('a_') ? 'gif' : 'png';
          profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`;
        }

        return {
          id: profile.id,
          name: profile.username,
          discriminator: profile.discriminator,
          email: profile.email,
          image: profile.image_url,
          accentColor: profile.accentColor,
        };
      },
    }),
  ],

  callbacks: {
    //@ts-ignore
    jwt: async ({ token, account, profile }) => {
      if (account) {
        token.accessToken = account.access_token;
        token.tokenType = account.token_type;
      }
      if (profile) {
        token.profile = profile;
        token.userId = profile.id;  // Include the userId in the token
      }
      return token;
    },
      //@ts-ignore
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken;
      session.tokenType = token.tokenType;
      session.discordUser = token.profile;
      return session;
    },
  },
};
 //@ts-ignore
export default NextAuth(authOptions);