import { MongoClient, ServerApiVersion, Long } from "mongodb";
import { getToken } from "next-auth/jwt";
import { fetchGuilds } from "../../../../app/function";
//@ts-ignore

interface GuildData {
  staffroles?: any;
  adminroles?: any;
  prefix?: any;
  infractionchannel?: any;
  infractiontypes?: any;
  infractionactions?: any[];
  promotionchannel?: any;
  promotionroles?: any[];
  applicationchannel?: any;
  applicationroles?: any;
  customcommands?: any[];
  commandslogging?: any;
  autoresponders?: any[];
  banappeals?: any;
  loachannel?: any;
  loaroles?: any;
  partnershipschannel?: any;
  suggestionschannel?: any;
  sugmanagementchannel?: any;
  suspensionchannel?: any;
  tags?: any[];
  tagslogging?: any;
  messagequota?: any;
  ignoredchannels?: any;
  reportchannel?: any;
  reportmodrole?: any;
  welcomeconfig?: any;
  modmailcategory?: any;
  modmailping?: any;
  snippets?: any[];
  formconfig?: any;
  staffdb?: any[];
  feedbackchannel?: any;
  modules?: any;
  moduleoptions?: any;
}
//@ts-ignore
export default async function handler(req, res) {
  let client;
  try {
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { guildid } = req.query;
    //@ts-ignore

    client = await MongoClient.connect(process.env.MONGODB_URI, {
      serverApi: ServerApiVersion.v1,
    });
    console.log("Connected to MongoDB");
    // Databases & Logic
    const astro = client.db("astro");

    const quota = client.db("quotadb");
    const guildIdLong = Long.fromString(guildid);
    const filter = { guild_id: guildIdLong };

    const data: GuildData = {};

    // Overview Section
    data.staffroles = await astro.collection("staffrole").findOne(filter);

    data.adminroles = await astro.collection("adminrole").findOne(filter);
    data.prefix = await astro.collection("prefixes").findOne(filter);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
