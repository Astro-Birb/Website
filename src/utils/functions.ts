import React from "react";
import  bitfield  from "../utils/bitfield";

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
  