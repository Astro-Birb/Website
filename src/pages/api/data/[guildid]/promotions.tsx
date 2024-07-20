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

    // Infraction Settings
    data.infractionchannel = await astro
      .collection("infraction channel")
      .findOne(filter);
    data.infractiontypes = await astro
      .collection("infractiontypes")
      .findOne(filter);
    data.infractionactions = await astro
      .collection("infractiontypeaction")
      .find(filter)
      .toArray();

    // Promotion Settings
    data.promotionchannel = await astro
      .collection("promo channel")
      .findOne(filter);
    data.promotionroles = await astro
      .collection("promotion roles")
      .find(filter)
      .toArray();

    // Applications
    data.applicationchannel = await astro
      .collection("Applications Channel")
      .findOne(filter);
    data.applicationroles = await astro
      .collection("Applications Roles")
      .findOne(filter);

    // Custom Commands
    data.customcommands = await astro
      .collection("Custom Commands")
      .find(filter)
      .toArray();
    data.commandslogging = await astro
      .collection("Commands Logging")
      .findOne(filter);

    // Auto Responder
    data.autoresponders = await astro
      .collection("Auto Responders")
      .find(filter)
      .toArray();

    // Ban Appeal
    data.banappeals = await astro
      .collection("Ban Appeals Configuration")
      .findOne(filter);

    // LOA
    data.loachannel = await astro.collection("LOA Channel").findOne(filter);
    data.loaroles = await astro.collection("LOA Role").findOne(filter);

    // Partnerships
    data.partnershipschannel = await astro
      .collection("Partnerships Channel")
      .findOne(filter);

    // Suggestions
    data.suggestionschannel = await astro
      .collection("suggestions channel")
      .findOne(filter);
    data.sugmanagementchannel = await astro
      .collection("Suggestion Management Channel")
      .findOne(filter);

    // Suspensions
    data.suspensionchannel = await astro
      .collection("Suspension Channel")
      .findOne(filter);

    // Tags
    data.tags = await astro.collection("tags").find(filter).toArray();
    data.tagslogging = await astro.collection("Tags Logging").findOne(filter);

    // Quota
    data.messagequota = await quota.collection("message_quota").findOne(filter);
    data.ignoredchannels = await quota
      .collection("Ignored Quota Channels")
      .findOne(filter);

    // Reports
    data.reportchannel = await astro
      .collection("report channel")
      .findOne(filter);
    data.reportmodrole = await astro
      .collection("Report Moderator Role")
      .findOne(filter);

    // Welcome
    data.welcomeconfig = await astro
      .collection("welcome settings")
      .findOne(filter);

    // Modmail
    data.modmailcategory = await astro
      .collection("modmailcategory")
      .findOne(filter);
    data.modmailping = await astro.collection("modmailping").findOne(filter);

    // Forum Configuration
    data.formconfig = await astro
      .collection("Forum Configuration")
      .findOne(filter);

    // Staff Database
    data.staffdb = await astro
      .collection("Staff Database")
      .find(filter)
      .toArray();

    // Feedback
    data.feedbackchannel = await astro
      .collection("Staff Feedback Channel")
      .findOne(filter);

    // Other
    data.modules = await astro.collection("Modules").findOne(filter);
    data.moduleoptions = await astro
      .collection("module options")
      .findOne(filter);

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
