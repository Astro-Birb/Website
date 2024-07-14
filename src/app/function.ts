"use server"
import React from "react";
import  bitfield  from "../utils/bitfield";
import { MongoClient, ServerApiVersion, Long } from 'mongodb';

export async function fetchGuilds(accessToken) {
    const response = await fetch('https://discord.com/api/users/@me/guilds', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch guilds: ${response.statusText}`);
    }
  
    const guilds = await response.json();
    return guilds.filter(guild => {
      const userPermissions = bitfield(parseInt(guild.permissions));
      return userPermissions.includes('MANAGE_GUILD');
    });
  };
  


export async function fetchPrefix(guildId: string) {
    try {
        const client = await MongoClient.connect(process.env.MONGODB_URI, {
            serverApi: {
                version: '1'
            }
        });
        
        console.log("Connected to MongoDB");

        const astro = client.db("astro");
        const prefixdb = astro.collection("prefixes");

        const guildIdLong = Long.fromString(guildId);
        const filter = { guild_id: guildIdLong };
        
        const prefix = await prefixdb.findOne(filter);
        return prefix;
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        throw err;
    } finally {
        if (client) {
            await client.close();
        }
    }
}